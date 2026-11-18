"""Static Atelier UI regression. No Google or speech-service requests are made."""
import asyncio
import os
import shutil
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
ARTIFACTS = ROOT / "test-artifacts"
ARTIFACTS.mkdir(exist_ok=True)
LAUNCH = {"headless": True}
chrome = os.environ.get("CHROME_BIN") or shutil.which("chromium-headless-shell") or shutil.which("chromium")
if chrome:
    LAUNCH["executable_path"] = chrome

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(**LAUNCH, args=["--no-sandbox"])
        try:
            page = await browser.new_page(viewport={"width": 1440, "height": 1100})
            errors = []
            page.on("pageerror", lambda error: errors.append(str(error)))
            await page.goto((ROOT / "index.html").resolve().as_uri(), wait_until="load")
            await page.locator("#maxSaveState").filter(has_text="Autosave ready").wait_for(timeout=15000)
            assert await page.locator(".visual-card").count() == 12
            await page.screenshot(path=str(ARTIFACTS / "atelier-desktop.png"))
            await page.locator('#mainNav [data-go="ai"]').click()
            assert await page.locator(".atelier-starter").count() == 4
            await page.locator('[data-atelier-starter="brainstorm"]').click()
            assert await page.locator("#aiAction").input_value() == "brainstorm"
            assert "three different directions" in await page.locator("#aiMessage").input_value()
            await page.locator("#atelierTone").select_option("professional")
            await page.locator("#atelierDetail").select_option("short")
            await page.locator(".atelier-context summary").click()
            await page.locator("#atelierPinnedContext").fill("A fictional workshop campaign; no invented results.")
            await page.locator("#atelierPreviewRequest").click()
            preview = await page.locator("#atelierPreviewContent").inner_text()
            assert "professional" in preview and "fictional workshop" in preview
            assert "X-Milaf-Token" not in preview
            await page.locator('[data-close="atelierPreviewDialog"]').click()
            await page.locator("#atelierHowToTalk").click()
            assert await page.locator("#atelierTalkDialog").is_visible()
            await page.locator('[data-close="atelierTalkDialog"]').click()
            await page.locator("#maxCommandButton").click()
            await page.locator("#maxCommandInput").fill("camera_motion_02")
            await page.locator("#maxCommandInput").press("Enter")
            assert await page.locator("#atelierGenerationPrompt").get_attribute("class") == "active"
            assert (await page.locator("#detailPrompt").input_value()).startswith("Depict ")
            assert await page.locator(".atelier-input-help").count() > 0
            assert await page.locator("#atelierCriteria li").count() == 3
            await page.locator("#atelierAssistantPrompt").click()
            assert (await page.locator("#detailPrompt").input_value()).startswith("Act as")
            await page.locator('[data-close="promptDialog"]').click()
            for width in [1440, 1280, 1024, 768, 390]:
                await page.set_viewport_size({"width": width, "height": 900})
                for view in ["explore", "create", "ai", "storyboard", "library", "projects"]:
                    await page.locator(f'#mainNav [data-go="{view}"]').click()
                    box = await page.locator(f"#{view}View").bounding_box()
                    assert box["x"] + box["width"] <= width + 1, (width, view, box)
            await page.locator('#mainNav [data-go="ai"]').click()
            await page.screenshot(path=str(ARTIFACTS / "atelier-chat-mobile.png"))
            await page.set_viewport_size({"width": 1440, "height": 1100})
            await page.screenshot(path=str(ARTIFACTS / "atelier-chat-desktop.png"))
            assert not errors, errors
            print("PASS: six redesigned workspaces at five widths; conversation controls, context preview, guide, and separate direct/assistant prompts. No AI or speech service called.")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
