(function () {
  function splitCodeBlocks(raw) {
    var lines = raw.split("\n");
    var html = [];
    var css = [];
    var js = [];

    lines.forEach(function (line) {
      var trimmed = line.trim();
      if (!trimmed) return;

      var isHtml = trimmed.indexOf("&lt;") !== -1 || trimmed[0] === "<";
      var isJs =
        /document\.|addEventListener|function\s|\bconst\b|\blet\b|\bvar\b|querySelector|=>/.test(trimmed);
      var isCss =
        /[{:]|^\.[\w-]|^#[\w-]|^@media|^@keyframes/.test(trimmed) &&
        !isJs &&
        !isHtml;

      if (isHtml) html.push(line);
      else if (isJs) js.push(line);
      else if (isCss) css.push(line);
      else html.push(line);
    });

    return {
      html: html.join("\n").trim(),
      css: css.join("\n").trim(),
      js: js.join("\n").trim(),
    };
  }

  function buildCodePanel(label, content) {
    var panel = document.createElement("div");
    panel.className = "tab-panel";
    panel.setAttribute("data-tab-panel", label);

    var pre = document.createElement("pre");
    var code = document.createElement("code");
    code.textContent = content || ("Aucun code " + label.toUpperCase() + " séparé.");
    pre.appendChild(code);
    panel.appendChild(pre);
    return panel;
  }

  document.querySelectorAll(".template-block").forEach(function (block, index) {
    var preview = block.querySelector(".preview-box");
    var sourcePre = block.querySelector("pre");
    var sourceCode = sourcePre ? sourcePre.querySelector("code") : null;
    if (!preview || !sourceCode) return;

    var split = splitCodeBlocks(sourceCode.textContent || "");

    var tabs = document.createElement("div");
    tabs.className = "template-tabs";
    tabs.innerHTML =
      '<button type="button" class="tab-btn is-active" data-tab-btn="preview">Preview</button>' +
      '<button type="button" class="tab-btn" data-tab-btn="html">HTML</button>' +
      '<button type="button" class="tab-btn" data-tab-btn="css">CSS</button>' +
      '<button type="button" class="tab-btn" data-tab-btn="js">JS</button>';

    var panels = document.createElement("div");
    panels.className = "tab-panels";

    var previewPanel = document.createElement("div");
    previewPanel.className = "tab-panel is-active";
    previewPanel.setAttribute("data-tab-panel", "preview");
    previewPanel.appendChild(preview);
    panels.appendChild(previewPanel);
    panels.appendChild(buildCodePanel("html", split.html));
    panels.appendChild(buildCodePanel("css", split.css));
    panels.appendChild(buildCodePanel("js", split.js));

    sourcePre.classList.add("template-source-hidden");

    block.insertBefore(tabs, sourcePre);
    block.insertBefore(panels, sourcePre);

    tabs.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-tab-btn]");
      if (!btn) return;
      var target = btn.getAttribute("data-tab-btn");

      tabs.querySelectorAll("[data-tab-btn]").forEach(function (tabBtn) {
        tabBtn.classList.toggle("is-active", tabBtn === btn);
      });

      panels.querySelectorAll("[data-tab-panel]").forEach(function (panel) {
        panel.classList.toggle("is-active", panel.getAttribute("data-tab-panel") === target);
      });
    });
  });
})();

