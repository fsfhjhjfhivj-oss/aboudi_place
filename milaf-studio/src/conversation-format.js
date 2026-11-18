// Small safe renderer: supports useful Markdown, never raw HTML, scripts, or links.
(() => {
  const escape = (value) =>
    String(value ?? "").replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  function inline(text) {
    text = String(text ?? "");
    const pattern = /(`[^`\n]+`|\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g;
    let output = "",
      offset = 0;
    for (const match of String(text).matchAll(pattern)) {
      output += escape(text.slice(offset, match.index));
      const token = match[0];
      output += token.startsWith("`")
        ? "<code>" + escape(token.slice(1, -1)) + "</code>"
        : token.startsWith("**")
          ? "<strong>" + escape(token.slice(2, -2)) + "</strong>"
          : "<em>" + escape(token.slice(1, -1)) + "</em>";
      offset = match.index + token.length;
    }
    return output + escape(text.slice(offset));
  }
  function tableCells(line) {
    const values = line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|");
    return values.slice(0, 12).map((value) => value.trim());
  }
  function renderMarkdown(input) {
    const source = String(input ?? "")
      .slice(0, 100000)
      .replace(/\r\n/g, "\n");
    const lines = source.split("\n");
    const blocks = [];
    let paragraph = [],
      list = [],
      listType = "",
      code = [],
      language = "",
      fenced = false;
    const flushParagraph = () => {
      if (paragraph.length) {
        blocks.push("<p>" + inline(paragraph.join(" ")) + "</p>");
        paragraph = [];
      }
    };
    const flushList = () => {
      if (list.length) {
        blocks.push(
          "<" +
            listType +
            ">" +
            list.map((x) => "<li>" + inline(x) + "</li>").join("") +
            "</" +
            listType +
            ">",
        );
        list = [];
        listType = "";
      }
    };
    const flushCode = () => {
      blocks.push(
        '<div class="atelier-code"><div><span>' +
          escape(language || "code") +
          '</span><button type="button" class="atelier-copy-code">Copy code</button></div><pre><code>' +
          escape(code.join("\n")) +
          "</code></pre></div>",
      );
      code = [];
      language = "";
    };
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];
      const trimmed = line.trim();
      if (/^```/.test(trimmed)) {
        if (fenced) {
          flushCode();
          fenced = false;
        } else {
          flushParagraph();
          flushList();
          language = trimmed
            .slice(3)
            .replace(/[^a-zA-Z0-9_+.#-]/g, "")
            .slice(0, 30);
          fenced = true;
        }
        continue;
      }
      if (fenced) {
        code.push(line);
        continue;
      }
      if (!trimmed) {
        flushParagraph();
        flushList();
        continue;
      }
      const heading = trimmed.match(/^(#{1,4})\s+(.+)/);
      if (heading) {
        flushParagraph();
        flushList();
        const level = heading[1].length <= 2 ? 3 : 4;
        blocks.push(
          "<h" + level + ">" + inline(heading[2]) + "</h" + level + ">",
        );
        continue;
      }
      if (/^([-*_])\1{2,}$/.test(trimmed)) {
        flushParagraph();
        flushList();
        blocks.push("<hr>");
        continue;
      }
      if (
        trimmed.includes("|") &&
        index + 1 < lines.length &&
        /^\s*\|?\s*:?-+:?\s*(?:\|\s*:?-+:?\s*)+\|?\s*$/.test(lines[index + 1])
      ) {
        flushParagraph();
        flushList();
        const heads = tableCells(line);
        index++;
        const rows = [];
        while (
          index + 1 < lines.length &&
          lines[index + 1].includes("|") &&
          rows.length < 50
        )
          rows.push(tableCells(lines[++index]));
        blocks.push(
          '<div class="atelier-table"><table><thead><tr>' +
            heads.map((c) => "<th>" + inline(c) + "</th>").join("") +
            "</tr></thead><tbody>" +
            rows
              .map(
                (r) =>
                  "<tr>" +
                  heads
                    .map((_, i) => "<td>" + inline(r[i] || "") + "</td>")
                    .join("") +
                  "</tr>",
              )
              .join("") +
            "</tbody></table></div>",
        );
        continue;
      }
      const item = trimmed.match(/^(?:([-+*])\s+|\d+[.)]\s+)(.+)/);
      if (item) {
        flushParagraph();
        const next = item[1] ? "ul" : "ol";
        if (listType && listType !== next) flushList();
        listType = next;
        list.push(item[2]);
        continue;
      }
      if (trimmed.startsWith("> ")) {
        flushParagraph();
        flushList();
        blocks.push(
          "<blockquote>" + inline(trimmed.slice(2)) + "</blockquote>",
        );
        continue;
      }
      flushList();
      paragraph.push(trimmed);
    }
    if (fenced) flushCode();
    flushParagraph();
    flushList();
    return blocks.join("");
  }
  function plainForSpeech(input) {
    return String(input ?? "")
      .replace(/```[\s\S]*?(?:```|$)/g, " Code example omitted. ")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/\*\*|__|`/g, "")
      .replace(/^\s*[-*+]\s+/gm, "")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .replace(/[\r\n]+/g, ". ")
      .slice(0, 8000);
  }
  function historyForModel(messages) {
    return (Array.isArray(messages) ? messages : [])
      .filter(
        (entry) =>
          entry &&
          ["user", "assistant"].includes(entry.role) &&
          typeof entry.text === "string" &&
          !entry.pending &&
          !entry.error &&
          !entry.excludeFromHistory,
      )
      .slice(-12)
      .map((entry) => ({ role: entry.role, text: entry.text.slice(0, 4000) }));
  }
  globalThis.MilafText = Object.freeze({
    escape,
    inline,
    renderMarkdown,
    plainForSpeech,
    historyForModel,
  });
})();
