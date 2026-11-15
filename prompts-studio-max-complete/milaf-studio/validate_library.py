"""Dependency-free structural checks for the bundled Prompt Milaf library.

This validates structure and consistency, not the truth or creativity of examples.
"""
from pathlib import Path
from collections import Counter
import json
import re
import statistics

ROOT = Path(__file__).resolve().parent
STRING_FIELDS = (
    "id", "title", "roleContext", "objective", "scope", "outputFormat",
    "exampleOutput", "promptText", "variant", "medium",
)

def validate_library(library):
    errors = []
    ids = set()
    counts = Counter()
    lengths = []
    category_counts = []
    if not isinstance(library, dict) or library.get("libraryName") != "Prompt Milaf":
        raise ValueError("Expected a Prompt Milaf library object.")
    if not isinstance(library.get("categories"), list) or not library["categories"]:
        raise ValueError("Expected a nonempty categories list.")
    names = set()
    for category in library["categories"]:
        if not isinstance(category, dict) or not isinstance(category.get("name"), str):
            errors.append("Invalid category object.")
            continue
        name = category["name"]
        if name in names:
            errors.append(f"Duplicate category: {name}")
        names.add(name)
        prompts = category.get("prompts")
        if not isinstance(prompts, list) or not prompts:
            errors.append(f"{name}: prompts must be a nonempty list.")
            continue
        category_counts.append({"name": name, "prompts": len(prompts)})
        for p in prompts:
            if not isinstance(p, dict):
                errors.append(f"{name}: invalid prompt object.")
                continue
            label = p.get("id", "<missing id>")
            for field in STRING_FIELDS:
                if not isinstance(p.get(field), str) or not p[field].strip():
                    errors.append(f"{label}: {field} must be a nonempty string.")
            if isinstance(label, str):
                if label in ids:
                    errors.append(f"Duplicate prompt ID: {label}")
                ids.add(label)
            guide = p.get("difficultyGuide", {})
            if not isinstance(guide, dict) or not all(isinstance(guide.get(k), str) and guide[k].strip() for k in ("beginner", "intermediate", "expert")):
                errors.append(f"{label}: incomplete difficulty guide.")
            templates = p.get("templates")
            if not isinstance(templates, list) or not all(isinstance(x, str) for x in templates):
                errors.append(f"{label}: templates must be a string list.")
            elif isinstance(p.get("promptText"), str):
                found = set(re.findall(r"\[[a-z_]+\]", p["promptText"]))
                if set(templates) != found or len(templates) != len(set(templates)):
                    errors.append(f"{label}: placeholder list mismatch or duplicate.")
            if not isinstance(p.get("tags"), list) or not all(isinstance(x, str) for x in p["tags"]):
                errors.append(f"{label}: tags must be a string list.")
            medium = p.get("medium")
            if medium not in ("text", "image", "video"):
                errors.append(f"{label}: invalid medium.")
            else:
                counts[medium] += 1
            if isinstance(p.get("promptText"), str):
                lengths.append(len(p["promptText"]))
    if errors:
        raise ValueError("Library validation failed:\n" + "\n".join(errors[:60]))
    return {
        "libraryName": library["libraryName"],
        "structuralValidation": "passed",
        "semanticReviewPerformed": False,
        "note": "Checks structure, uniqueness, fields, and placeholders only. Examples and output quality are not independently verified. Workflow and shot-treatment variants are intentional.",
        "totalPrompts": len(ids),
        "totalCategories": len(names),
        "mediumCounts": dict(counts),
        "promptTextCharacters": {"min": min(lengths), "median": int(statistics.median(lengths)), "max": max(lengths)},
        "categories": category_counts,
    }

def main():
    library = json.loads((ROOT / "library.json").read_text(encoding="utf-8"))
    report = validate_library(library)
    (ROOT / "library-quality-report.json").write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")
    print(f"Validated {report['totalPrompts']:,} prompts across {report['totalCategories']} categories.")

if __name__ == "__main__":
    main()
