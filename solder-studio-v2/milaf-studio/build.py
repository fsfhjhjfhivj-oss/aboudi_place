"""Build the self-contained site using only the Python standard library."""
from pathlib import Path
import base64
import json

ROOT = Path(__file__).resolve().parent

def main():
    library = json.loads((ROOT / 'library.json').read_text(encoding='utf-8'))
    assets = {
        p.stem: 'data:image/webp;base64,' + base64.b64encode(p.read_bytes()).decode('ascii')
        for p in sorted((ROOT / 'assets').glob('*.webp'))
    }
    css = (ROOT / 'src/styles.css').read_text(encoding='utf-8')
    js = (ROOT / 'src/app.js').read_text(encoding='utf-8')
    template = (ROOT / 'src/template.html').read_text(encoding='utf-8')
    icons = {
        '__SEARCH_ICON__': '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7"/><path d="m16 16 5 5"/></svg>',
        '__COPY_ICON__': '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 8h13v13H8z M16 8V3H3v13h5"/></svg>',
        '__SETTINGS_ICON__': '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="3" fill="#0d0e10"/><circle cx="15" cy="17" r="3" fill="#0d0e10"/></svg>',
    }
    for key, value in icons.items():
        template = template.replace(key, value)
    for name, value in assets.items():
        template = template.replace('__ASSET_' + name + '__', value)
    output = template.replace('__CSS__', css).replace('__JS__', js)
    output = output.replace('__ARTWORK__', json.dumps(assets, separators=(',', ':')))
    output = output.replace('__DATA__', json.dumps(library, ensure_ascii=False, separators=(',', ':')).replace('<', '\\u003c'))
    (ROOT / 'index.html').write_text(output, encoding='utf-8')
    count = sum(len(c['prompts']) for c in library['categories'])
    print(f'Built standalone studio with {count:,} prompts and {len(assets)} editorial artwork assets.')

if __name__ == '__main__':
    main()
