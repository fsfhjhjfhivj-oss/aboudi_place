"""Optional browser regression test. Local fixtures only; no Google API calls.
Install Playwright and Chromium separately. Run from the website directory.
"""
import os, shutil
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
ARTIFACTS=ROOT/'test-artifacts'
ARTIFACTS.mkdir(exist_ok=True)
LAUNCH={'headless': True}
chrome=os.environ.get('CHROME_BIN') or shutil.which('chromium-headless-shell') or shutil.which('chromium')
if chrome: LAUNCH['executable_path']=chrome
import asyncio,json
from pathlib import Path
from playwright.async_api import async_playwright
async def full_max_test():
 async with async_playwright() as p:
  browser=await p.chromium.launch(**LAUNCH,args=['--no-sandbox'])
  try:
   page=await browser.new_page(viewport={'width':1440,'height':1100})
   errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
   await page.goto((ROOT / 'index.html').resolve().as_uri(),wait_until='load')
   await page.locator('#maxSaveState').filter(has_text='Autosave ready').wait_for(timeout=15000)
   # Autosave and actual page-reload recovery, with images excluded by default.
   await page.locator('#mainNav [data-go="create"]').click()
   await page.locator('#cTitle').fill('MAX recovery proof')
   await page.locator('#cSubject').fill('A fictional explorer in a green studio, looking toward a window')
   await page.locator('#referenceFile').set_input_files(str(ROOT / 'assets' / 'astronaut.webp'))
   await page.locator('#referencePreview').wait_for(state='visible')
   await page.locator('#maxSaveState').filter(has_text='Saved locally · reference excluded').wait_for(timeout=15000)
   await page.reload(wait_until='load')
   await page.locator('#maxRestoreBanner').wait_for(state='visible',timeout=15000)
   await page.locator('#maxRestoreWorkspace').click()
   assert await page.locator('#cTitle').input_value()=='MAX recovery proof'
   assert await page.locator('#referencePreview').is_hidden()
   await page.locator('#maxVersionQuick').click()
   await page.locator('#toast').filter(has_text='Version saved locally').wait_for(timeout=15000)
   await page.locator('#cSubject').fill('A different, deliberately temporary subject')
   await page.locator('#maxSettingsButton').click()
   assert await page.locator('.max-version').count()==1
   page.once('dialog',lambda dialog:asyncio.create_task(dialog.accept()))
   await page.locator('[data-max-restore-version]').first.click()
   assert 'fictional explorer' in await page.locator('#cSubject').input_value()
   # Keyboard palette and a real library prompt.
   await page.keyboard.press('Control+k')
   await page.locator('#maxCommandInput').fill('creative_01')
   await page.locator('#maxCommandInput').press('Enter')
   assert await page.locator('#promptDialog').is_visible()
   await page.get_by_role('button',name='Add to collection ＋',exact=True).click()
   await page.locator('#maxCollectionName').fill('MAX campaign')
   await page.locator('#maxCollectionForm button[type="submit"]').click()
   assert await page.locator('[data-max-membership]').first.is_checked()
   await page.locator('[data-close="maxCollectionsDialog"]').click()
   await page.locator('[data-close="promptDialog"]').click()
   await page.locator('#mainNav [data-go="library"]').click()
   option=page.locator('#maxCollectionSelect option').filter(has_text='MAX campaign')
   await page.locator('#maxCollectionSelect').select_option(await option.get_attribute('value'))
   assert await page.locator('.text-card').count()==1
   await page.locator('#maxCollectionSelect').select_option('all')
   await page.locator('[data-max-select]').nth(0).check()
   await page.locator('[data-max-select]').nth(1).check()
   await page.locator('#maxCompareSelected').click()
   assert await page.locator('.max-compare-column').count()==2
   await page.locator('[data-close="maxCompareDialog"]').click()
   async with page.expect_download() as info:await page.locator('#maxExportSelected').click()
   selected=json.loads(Path(await(await info.value).path()).read_text())
   assert sum(len(c['prompts']) for c in selected['categories'])==2
   # Local storyboard starter and a real Markdown download.
   await page.locator('#mainNav [data-go="storyboard"]').click()
   await page.locator('#maxStarterBoard').click()
   assert await page.locator('.shot').count()==3
   assert await page.locator('#boardDuration').inner_text()=='15s'
   async with page.expect_download() as info:await page.locator('#maxExportMarkdown').click()
   markdown=Path(await(await info.value).path()).read_text()
   assert '00:00–00:05' in markdown and '00:09–00:15' in markdown
   await page.locator('#saveBoard').click()
   await page.locator('#mainNav [data-go="projects"]').click()
   assert await page.locator('.project-card').count()==1
   await page.locator('#maxProjectSearch').fill('does-not-exist')
   assert await page.locator('.project-card:visible').count()==0
   await page.locator('#maxProjectSearch').fill('')
   assert await page.locator('.project-card:visible').count()==1
   # Backup schema is deliberately whitelist-based, with no AI session/credential object.
   await page.locator('#maxSettingsButton').click()
   await page.locator('#maxDensity').select_option('compact')
   await page.locator('#maxReduceMotion').check()
   async with page.expect_download() as info:await page.locator('#maxExportBackup').click()
   backup=json.loads(Path(await(await info.value).path()).read_text())
   assert backup['format']=='milaf-workspace-backup-v1'
   assert 'ai' not in backup and 'token' not in backup and 'chat' not in backup
   assert len(backup['versions'])==1 and len(backup['collections'])==1
   assert backup['workspace']['reference'] is None
   assert len(json.dumps(backup).encode()) < 100000, 'Bundled editorial art should be stored by reference, not copied into every version.'
   page.once('dialog',lambda dialog:asyncio.create_task(dialog.accept()))
   await page.locator('#maxImportBackup').set_input_files({'name':'private-backup.json','mimeType':'application/json','buffer':json.dumps(backup).encode()})
   await page.locator('#toast').filter(has_text='Backup merged.').wait_for(timeout=15000)
   page.once('dialog',lambda dialog:asyncio.create_task(dialog.accept()))
   await page.locator('#maxClearRecovery').click()
   await page.locator('#toast').filter(has_text='Recovery data cleared.').wait_for(timeout=15000)
   assert not await page.locator('#maxAutosave').is_checked()
   assert await page.locator('.max-version').count()==0
   await page.locator('[data-close="maxSettingsDialog"]').click()
   await page.locator('#mainNav [data-go="explore"]').click()
   await page.screenshot(path=str(ARTIFACTS / 'max-desktop.png'),full_page=False)
   await page.set_viewport_size({'width':390,'height':844})
   box=await page.locator('.max-workbar').bounding_box();assert box['x']+box['width']<=391
   await page.screenshot(path=str(ARTIFACTS / 'max-mobile.png'),full_page=False)
   assert not errors,errors
   return 'PASS: autosave/reload recovery, reference exclusion, versions, keyboard palette, collections, bulk comparison/export, storyboard starter/Markdown timing, project search, private-backup export/import, recovery-data deletion, density/reduced motion, desktop/mobile, no JavaScript errors.'
  finally:await browser.close()

if __name__ == '__main__':
    print(asyncio.run(full_max_test()))
