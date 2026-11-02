
# Prompt Milaf

A categorized, machine-parsable library of **80 AI prompts**, organized into **8 categories** with **10 prompts per category**.

## Categories

| Category | Folder | Prompts |
| --- | --- | ---: |
| Creativity | `creativity/` | 10 |
| Coding | `coding/` | 10 |
| Research | `research/` | 10 |
| Learning | `learning/` | 10 |
| Planning | `planning/` | 10 |
| Writing | `writing/` | 10 |
| Analysis | `analysis/` | 10 |
| Troubleshooting | `troubleshooting/` | 10 |

## Repository structure

```text
prompt-milaf/
├── README.md
├── library.json
├── creativity/
│   └── prompts.json
├── coding/
│   └── prompts.json
├── research/
│   └── prompts.json
├── learning/
│   └── prompts.json
├── planning/
│   └── prompts.json
├── writing/
│   └── prompts.json
├── analysis/
│   └── prompts.json
└── troubleshooting/
    └── prompts.json
```

`library.json` contains the complete library. Each category's `prompts.json` contains only that category, using the same top-level structure.

## Quick start

1. Open the complete library or a category-specific JSON file.
2. Select a prompt by its unique `id`.
3. Replace bracketed placeholders such as `[topic]` and `[audience]` with your details.
4. Combine `roleContext`, `objective`, `scope`, and `outputFormat` into your request.
5. Add the desired guidance from `difficultyGuide`.
6. Use `exampleOutput` as an illustration of the expected response, not as verified evidence or a required answer.

If a required detail is unavailable, ask for clarification rather than inventing it.

### Example assembled request

```text
Act as an interdisciplinary brainstorming facilitator.
Generate 10 distinct ideas for a neighborhood gardening event serving local families.
Give each idea a title, rationale, and feasibility rating; respect a $200 budget.
Output a numbered list.
Difficulty: Beginner. Use one simple case, define unfamiliar terms, and explain each step.
```

## Data format

All prompt data is stored as UTF-8 JSON. The library uses this structure:

```json
{
  "libraryName": "Prompt Milaf",
  "categories": [
    {
      "name": "Creativity",
      "prompts": [
        {
          "id": "creative_01",
          "roleContext": "Act as a creative facilitator.",
          "objective": "Generate ideas for [topic].",
          "scope": "Provide 10 distinct ideas for [audience].",
          "outputFormat": "Numbered list",
          "exampleOutput": "Seed-Swap Stories: Neighbors exchange seeds and gardening stories.",
          "difficultyGuide": {
            "beginner": "Use familiar examples and explain terms.",
            "intermediate": "Compare approaches and discuss trade-offs.",
            "expert": "Challenge assumptions and propose validation methods."
          },
          "templates": ["[topic]", "[audience]"]
        }
      ]
    }
  ]
}
```

The example above illustrates the structure; consult the JSON files for the actual prompt contents.

### Field reference

| Field | Type | Purpose |
| --- | --- | --- |
| `libraryName` | string | Library display name. |
| `categories` | array | Collection of category objects. |
| `name` | string | Category display name. |
| `prompts` | array | Prompts belonging to the category. |
| `id` | string | Unique, stable prompt identifier. |
| `roleContext` | string | Expert role and context to assume. |
| `objective` | string | Task the AI should accomplish. |
| `scope` | string | Depth, constraints, limits, and requirements. |
| `outputFormat` | string | Requested response presentation. |
| `exampleOutput` | string | Illustrative sample response; may contain embedded JSON or code. |
| `difficultyGuide` | object | Beginner, intermediate, and expert customization instructions. |
| `templates` | array of strings | Replaceable bracketed placeholders; may be empty. |

## Use with Python

This example loads a prompt, replaces its placeholders, and assembles a request. It uses only the Python standard library. Run it from the repository root.

```python
import json
import re
from pathlib import Path

library = json.loads(Path("library.json").read_text(encoding="utf-8"))

prompt = next(
    prompt
    for category in library["categories"]
    for prompt in category["prompts"]
    if prompt["id"] == "creative_01"
)

values = {
    "[topic]": "a neighborhood gardening event",
    "[audience]": "local families",
    "[constraints]": "a $200 budget and an outdoor venue",
}
level = "beginner"  # beginner, intermediate, or expert

request = "\n\n".join([
    prompt["roleContext"],
    prompt["objective"],
    prompt["scope"],
    "Output format: " + prompt["outputFormat"],
    "Difficulty guidance: " + prompt["difficultyGuide"][level],
])

# Replace placeholders in a single pass.
request = re.sub(
    r"\[[a-z_]+\]",
    lambda match: values.get(match.group(0), match.group(0)),
    request,
)
unfilled = re.findall(r"\[[a-z_]+\]", request)
if unfilled:
    raise ValueError(f"Unfilled placeholders: {sorted(set(unfilled))}")

print(request)
```

## GitHub prompt-manager integration

- Import `library.json` when your manager accepts this library structure.
- Import category-specific files to work with a smaller collection.
- Use category names for grouping and prompt IDs as stable keys.
- If your manager expects a different schema or one prompt per file, add a conversion step before importing.
- The library does not include a manager-specific manifest, plugin, or automated synchronization.

## Editing and contributing

1. Preserve existing IDs when updating prompts.
2. Keep all required fields and all three difficulty levels.
3. Provide a concrete example output for every prompt.
4. List the prompt's replaceable placeholders in `templates`.
5. Keep examples illustrative; do not introduce fabricated sources or unsupported claims.
6. Update the category file and regenerate the combined library to keep them consistent.
7. Validate the JSON before committing.

### Regenerate the combined library

Run from the repository root after updating category files:

```python
import json
from pathlib import Path

folders = [
    "creativity", "coding", "research", "learning",
    "planning", "writing", "analysis", "troubleshooting",
]
categories = []
for folder in folders:
    path = Path(folder) / "prompts.json"
    data = json.loads(path.read_text(encoding="utf-8"))
    categories.extend(data["categories"])

library = {"libraryName": "Prompt Milaf", "categories": categories}
Path("library.json").write_text(
    json.dumps(library, ensure_ascii=False, indent=2) + "\n",
    encoding="utf-8",
)
```

### Basic validation

```python
import json
from pathlib import Path

library = json.loads(Path("library.json").read_text(encoding="utf-8"))
required = {
    "id", "roleContext", "objective", "scope", "outputFormat",
    "exampleOutput", "difficultyGuide", "templates",
}
ids = set()
assert library["libraryName"] == "Prompt Milaf"
assert len(library["categories"]) == 8

for category in library["categories"]:
    assert len(category["prompts"]) == 10
    for prompt in category["prompts"]:
        assert required <= prompt.keys()
        assert prompt["id"] not in ids
        ids.add(prompt["id"])
        assert {"beginner", "intermediate", "expert"} <= prompt["difficultyGuide"].keys()
        assert isinstance(prompt["templates"], list)
        assert all(isinstance(item, str) for item in prompt["templates"])
        for field in required - {"difficultyGuide", "templates"}:
            assert isinstance(prompt[field], str) and prompt[field].strip()

print(f"Validated {len(ids)} prompts.")
```

This is a basic structural check, not a formal JSON Schema validator. Update the category and prompt-count checks if you intentionally expand the library.

## Responsible use

- Review generated answers before relying on them.
- Verify factual claims, citations, calculations, and current information.
- Test generated code in a safe environment before deployment.
- Do not submit secrets, credentials, or sensitive personal data without appropriate safeguards.
- Keep security testing within explicitly authorized scope.
- Prompt instructions and difficulty levels do not guarantee accuracy or expertise.

## License

No license is specified in this package. The repository owner should choose and add a license before publishing permissions for reuse or redistribution.
