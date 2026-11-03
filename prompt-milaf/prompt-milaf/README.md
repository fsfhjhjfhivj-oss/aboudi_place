# Prompt Milaf

**800 AI prompts · 16 categories · 50 prompts per category**

A JSON-first prompt library with readable Markdown companions. Every prompt includes an expert role, objective, scope, output format, illustrative response, beginner/intermediate/expert guidance, placeholders, and a copy-ready paragraph.

## What is new

- Eight new categories: Business, Marketing, Productivity, Design, Career, Leadership, Customer Support, and Personal Development.
- Original 160 prompts preserved with stable IDs.
- 640 additional entries organized into explicit task variants.
- Searchable JSON and CSV indexes.
- Titles, tags, and variant labels on every entry.

**Counting note:** The 640 additions use 160 task families. Existing categories add creation, review, and revision variants for ten families each (30 entries per category). New categories provide creation, review, revision, comparison, and pilot variants for ten families each (50 entries per category). These are purposeful workflow variants, not 640 unrelated subjects.

## Categories

| Category | Folder | Prompts |
| --- | --- | ---: |
| Creativity | `creativity/` | 50 |
| Coding | `coding/` | 50 |
| Research | `research/` | 50 |
| Learning | `learning/` | 50 |
| Planning | `planning/` | 50 |
| Writing | `writing/` | 50 |
| Analysis | `analysis/` | 50 |
| Troubleshooting | `troubleshooting/` | 50 |
| Business | `business/` | 50 |
| Marketing | `marketing/` | 50 |
| Productivity | `productivity/` | 50 |
| Design | `design/` | 50 |
| Career | `career/` | 50 |
| Leadership | `leadership/` | 50 |
| Customer Support | `customer-support/` | 50 |
| Personal Development | `personal-development/` | 50 |

## Structure

```text
prompt-milaf/
├── README.md
├── library.json        # Complete library
├── index.json          # Searchable metadata
├── index.csv           # Spreadsheet-friendly metadata
├── creativity/
│   ├── prompts.json
│   └── prompts.md
├── coding/
│   ├── prompts.json
│   └── prompts.md
└── ...                 # Same structure for all 16 categories
```

## Quick start

1. Browse a category's Markdown companion or filter the index by title, category, tags, or variant.
2. Select an entry and copy its `promptText` paragraph.
3. Replace quoted placeholders: `"[topic]"` might become `"a community repair workshop"`.
4. Set `"[difficulty]"` to `"beginner"`, `"intermediate"`, or `"expert"`.
5. Set `"[additional_constraints]"` to actual requirements or `"none"`, where present.
6. Set `"[desired_length]"` to a concrete limit, such as `"500 words"`, where present.
7. For review or revision variants, supply the actual draft. Comparison and pilot variants request their own context.
8. Review results and verify factual claims before use.

Examples illustrate answer style; they are not externally verified evidence, test results, or guaranteed outputs. Some review examples deliberately describe what an illustrative finding could look like rather than claiming an unseen draft has a defect.

## Variant types

| Variant | Purpose | Typical extra input |
| --- | --- | --- |
| `original` | One of the original 160 task prompts | Task-specific placeholders |
| `create` | Produce a first usable version | Goal and constraints |
| `review` | Find supported issues in an existing version | `[draft]` |
| `revise` | Improve an existing version | `[draft]` |
| `compare` | Compare alternative approaches | `[comparison_context]` |
| `pilot` | Plan a bounded test without inventing results | `[pilot_constraints]` |

## JSON structure and fields

The complete and category libraries use `{ "libraryName": "Prompt Milaf", "categories": [...] }`. Each category has a `name` and `prompts` array. Each prompt contains:

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | string | Stable unique identifier |
| `title` | string | Human-readable task and variant |
| `tags` | array of strings | Search metadata |
| `variant` | string | Workflow variant label |
| `roleContext` | string | Expert role and context |
| `objective` | string | Requested task |
| `scope` | string | Constraints, boundaries, and quality requirements |
| `outputFormat` | string | Response structure |
| `exampleOutput` | string | Concrete illustrative response excerpt |
| `difficultyGuide` | object | `beginner`, `intermediate`, and `expert` instructions |
| `templates` | array of strings | Placeholders appearing in the copy-ready paragraph |
| `promptText` | string | Self-contained paragraph to copy and customize |

New metadata fields extend the original schema. Managers that reject extra fields need an import adapter. No manager-specific plugin or automatic synchronization is included.

## Python: find and customize a prompt

Run from the repository root. This example requires only the standard library.

```python
import json
import re
from pathlib import Path

library = json.loads(Path("library.json").read_text(encoding="utf-8"))
prompts = [p for c in library["categories"] for p in c["prompts"]]
prompt = next(p for p in prompts if p["id"] == "creative_01")
values = {
    "[topic]": "a community repair workshop",
    "[audience]": "local families",
    "[constraints]": "a small donated venue and no specialist purchases",
    "[difficulty]": "beginner",
}
text = re.sub(
    r"\[[a-z_]+\]",
    lambda m: values.get(m.group(0), m.group(0)),
    prompt["promptText"],
)
remaining = re.findall(r"\[[a-z_]+\]", text)
if remaining:
    raise ValueError(f"Fill these placeholders: {sorted(set(remaining))}")
print(text)
```

## Contributing

- Preserve existing IDs and maintain unique IDs for additions.
- Keep all required fields and all three difficulty levels.
- Make variants genuinely useful for their stated operation.
- Prefer task-specific examples over generic assurances.
- Keep the category files, complete library, Markdown companions, and indexes synchronized.
- Do not fabricate sources, credentials, measurements, or execution claims.

## Basic validation

```python
import json
import re
from pathlib import Path

library = json.loads(Path("library.json").read_text(encoding="utf-8"))
assert len(library["categories"]) == 16
ids = set()
for category in library["categories"]:
    assert len(category["prompts"]) == 50
    for p in category["prompts"]:
        assert p["id"] not in ids
        ids.add(p["id"])
        assert set(p["difficultyGuide"]) == {"beginner", "intermediate", "expert"}
        assert set(p["templates"]) == set(re.findall(r"\[[a-z_]+\]", p["promptText"]))
assert len(ids) == 800
print("Validated 800 unique prompt IDs and placeholder lists.")
```

These are structural checks, not a guarantee of answer quality or formal JSON Schema validation. Update count checks when intentionally changing the collection size.

## Responsible use

Verify high-stakes and time-sensitive information. Test generated code safely. Keep security work authorized. Do not expose credentials or sensitive personal data. Business and career outputs are not legal, tax, or investment advice; personal-development outputs are not diagnoses or clinical treatment. Use qualified help when appropriate.

## License

No license is specified in this package. The repository owner should choose a license before granting reuse or redistribution permissions.
