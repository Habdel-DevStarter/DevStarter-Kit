(function () {
  function setupSeo() {
    var head = document.head;
    if (!head) return;
    var currentUrl = window.location.origin + window.location.pathname;
    var siteRoot = window.location.origin;
    var defaultOgImage = siteRoot + "/assets/images/og-default.svg";

    function ensureMeta(selector, attributes) {
      var node = document.querySelector(selector);
      if (!node) {
        node = document.createElement("meta");
        Object.keys(attributes).forEach(function (key) {
          if (key === "content") return;
          node.setAttribute(key, attributes[key]);
        });
        head.appendChild(node);
      }
      if (attributes.content) node.setAttribute("content", attributes.content);
      return node;
    }

    function ensureLink(selector, attributes) {
      var node = document.querySelector(selector);
      if (!node) {
        node = document.createElement("link");
        Object.keys(attributes).forEach(function (key) {
          node.setAttribute(key, attributes[key]);
        });
        head.appendChild(node);
      } else {
        Object.keys(attributes).forEach(function (key) {
          node.setAttribute(key, attributes[key]);
        });
      }
      return node;
    }

    var canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      head.appendChild(canonical);
    }
    canonical.setAttribute("href", currentUrl);

    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      head.appendChild(ogUrl);
    }
    ogUrl.setAttribute("content", currentUrl);

    var robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      head.appendChild(robots);
    }
    var isLocal = /^(localhost|127\.0\.0\.1)$/i.test(window.location.hostname);
    robots.setAttribute("content", isLocal ? "noindex, nofollow" : "index, follow");

    var manifest = document.querySelector('link[rel="manifest"]');
    if (!manifest) {
      manifest = document.createElement("link");
      manifest.setAttribute("rel", "manifest");
      manifest.setAttribute("href", "site.webmanifest");
      head.appendChild(manifest);
    }

    var themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement("meta");
      themeColor.setAttribute("name", "theme-color");
      head.appendChild(themeColor);
    }
    themeColor.setAttribute("content", "#0e8cff");

    ensureMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });

    var ogImage = ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: defaultOgImage,
    });
    var ogImageValue = ogImage.getAttribute("content") || "";
    if (!ogImageValue || /example\.com/i.test(ogImageValue)) {
      ogImage.setAttribute("content", defaultOgImage);
    }

    var twitterImage = ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: defaultOgImage,
    });
    var twitterImageValue = twitterImage.getAttribute("content") || "";
    if (!twitterImageValue || /example\.com/i.test(twitterImageValue)) {
      twitterImage.setAttribute("content", defaultOgImage);
    }

    ensureMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "DevStarter Kit",
    });

    ensureLink('link[rel="icon"]', {
      rel: "icon",
      type: "image/svg+xml",
      href: "/assets/icons/favicon.svg",
    });

    ensureLink('link[rel="apple-touch-icon"]', {
      rel: "apple-touch-icon",
      href: "/assets/icons/apple-touch-icon.svg",
    });
  }

  function ensureSkipLink() {
    if (document.querySelector(".skip-link")) return;
    var main = document.querySelector("main");
    if (!main) return;
    if (!main.id) main.id = "main-content";

    var skip = document.createElement("a");
    skip.className = "skip-link";
    skip.href = "#" + main.id;
    skip.textContent = "Aller au contenu";
    document.body.insertBefore(skip, document.body.firstChild);
  }

  function showToast(message) {
    var toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast._timer);
    showToast._timer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2000);
  }

  setupSeo();
  ensureSkipLink();
  window.DevStarterToast = showToast;

  var menuToggle = document.getElementById("menuToggle");
  var menu = document.getElementById("primaryMenu");
  if (menuToggle && menu) {
    var currentPath = window.location.pathname.split("/").pop() || "index.html";
    var existingLinks = Array.prototype.slice.call(menu.querySelectorAll("a.navbar__link"));
    var themeToggleBtn = menu.querySelector("#themeToggle");
    var linkByHref = {};
    var previouslyActive = {};

    existingLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      if (!href || linkByHref[href]) return;
      linkByHref[href] = link.cloneNode(true);
      previouslyActive[href] = link.classList.contains("is-active");
    });

    function isCurrent(href) {
      if (currentPath === href) return true;
      if (href === "blog.html" && currentPath.indexOf("blog-") === 0) return true;
      return false;
    }

    function makeLink(href, label, itemClass) {
      var base = linkByHref[href];
      var link = base ? base.cloneNode(true) : document.createElement("a");
      link.className = itemClass || "navbar__link";
      link.setAttribute("href", href);
      link.textContent = label;
      link.classList.toggle("is-active", isCurrent(href) || Boolean(previouslyActive[href]));
      return link;
    }

    function makeGroup(title, items) {
      var group = document.createElement("div");
      group.className = "nav-group";

      var toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "navbar__link nav-group__toggle";
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = title;

      var groupMenu = document.createElement("div");
      groupMenu.className = "nav-group__menu";

      var hasActive = false;
      items.forEach(function (item) {
        var link = makeLink(item.href, item.label, "navbar__link nav-group__item");
        if (link.classList.contains("is-active")) hasActive = true;
        link.classList.remove("is-active");
        groupMenu.appendChild(link);
      });

      if (hasActive) toggle.classList.add("is-active");

      group.appendChild(toggle);
      group.appendChild(groupMenu);
      return group;
    }

    menu.innerHTML = "";

    var primary = [
      { href: "index.html", label: "Accueil" },
      { href: "templates.html", label: "Templates" },
      { href: "blog.html", label: "Blog" },
      { href: "projets.html", label: "Projets" },
    ];
    primary.forEach(function (item) {
      menu.appendChild(makeLink(item.href, item.label));
    });

    menu.appendChild(
      makeGroup("Composants", [
        { href: "navbar.html", label: "Barres de nav" },
        { href: "footer.html", label: "Pieds de page" },
        { href: "cards.html", label: "Cartes" },
        { href: "forms.html", label: "Formulaires" },
        { href: "buttons.html", label: "Boutons" },
        { href: "modals.html", label: "Modales" },
        { href: "layout.html", label: "Layouts" },
        { href: "pricing.html", label: "Pricing Demo" },
      ])
    );

    menu.appendChild(
      makeGroup("Outils", [
        { href: "generateur.html", label: "Générateur" },
        { href: "calculateur.html", label: "Calculateur" },
        { href: "defis.html", label: "Défis" },
        { href: "theme.html", label: "Thème Lab" },
      ])
    );

    if (themeToggleBtn) menu.appendChild(themeToggleBtn);

    var navGroups = Array.prototype.slice.call(menu.querySelectorAll(".nav-group"));
    navGroups.forEach(function (group) {
      var groupToggle = group.querySelector(".nav-group__toggle");
      groupToggle.addEventListener("click", function () {
        var willOpen = !group.classList.contains("is-open");
        navGroups.forEach(function (other) {
          if (other !== group) {
            other.classList.remove("is-open");
            var otherToggle = other.querySelector(".nav-group__toggle");
            if (otherToggle) otherToggle.setAttribute("aria-expanded", "false");
          }
        });
        group.classList.toggle("is-open", willOpen);
        groupToggle.setAttribute("aria-expanded", String(willOpen));
      });
    });

    document.addEventListener("click", function (event) {
      navGroups.forEach(function (group) {
        if (group.contains(event.target)) return;
        group.classList.remove("is-open");
        var toggle = group.querySelector(".nav-group__toggle");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      });
    });

    menuToggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.classList.toggle("is-open", open);
    });
  }

  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    window.addEventListener("scroll", function () {
      scrollTopBtn.classList.toggle("is-visible", window.scrollY > 280);
    });
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("click", function (event) {
    var rippleBtn = event.target.closest(".ripple");
    if (!rippleBtn) return;
    var rect = rippleBtn.getBoundingClientRect();
    rippleBtn.style.setProperty("--ripple-x", event.clientX - rect.left + "px");
    rippleBtn.style.setProperty("--ripple-y", event.clientY - rect.top + "px");
    rippleBtn.classList.remove("is-rippling");
    void rippleBtn.offsetWidth;
    rippleBtn.classList.add("is-rippling");
  });

  var loadingOverlay = document.getElementById("loadingOverlay");
  window.addEventListener("load", function () {
    if (loadingOverlay) loadingOverlay.classList.add("is-hidden");
  });

  if (!document.querySelector(".site-footer")) {
    var footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML =
      '<div class="container site-footer__inner">' +
      '<div class="site-footer__brand"><strong>DevStarter Kit</strong><p>Templates modernes pour apprendre, tester et livrer plus vite.</p></div>' +
      '<div class="site-footer__grid">' +
      '<section><h4>Produit</h4><a href="templates.html">Templates</a><a href="layout.html">Layouts</a><a href="pricing.html">Pricing Demo</a></section>' +
      '<section><h4>Ressources</h4><a href="defis.html">Défis débutants</a><a href="theme.html">Thème Lab</a><a href="README.md">Documentation</a></section>' +
      '<section><h4>Légal</h4><a href="confidentialite.html">Confidentialité</a><a href="conditions.html">Conditions</a><a href="cookies.html">Cookies</a></section>' +
      '<section><h4>Social</h4><a href="#">GitHub</a><a href="#">LinkedIn</a><a href="#">Discord</a></section>' +
      "</div>" +
      '<p class="site-footer__copy">© 2026 DevStarter Kit. Tous droits réservés.</p>' +
      "</div>";
    document.body.appendChild(footer);
  }

  var homeCategories = document.getElementById("homeCategories");
  if (homeCategories && window.DevStarterData && Array.isArray(window.DevStarterData.categories)) {
    homeCategories.innerHTML = window.DevStarterData.categories
      .map(function (item) {
        return (
          '<article class="card hover-lift"><h3>' +
          item.title +
          "</h3><p>" +
          item.description +
          '</p><a class="btn btn--primary ripple" href="' +
          item.link +
          '">Voir</a></article>'
        );
      })
      .join("");
  }

  var skeleton = document.getElementById("templateSkeleton");
  var grid = document.getElementById("templateGrid");
  if (skeleton && grid) {
    window.setTimeout(function () {
      skeleton.classList.add("hidden");
      grid.classList.remove("hidden");
    }, 700);
  }

  var forms = document.querySelectorAll(".js-validate-form");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var message = form.querySelector(".form__message");
      if (!message) return;

      var invalid = Array.prototype.find.call(form.elements, function (field) {
        return field.willValidate && !field.checkValidity();
      });

      if (invalid) {
        message.textContent = "Veuillez vérifier les champs puis réessayer.";
        message.classList.add("is-error");
        message.classList.remove("is-success");
        invalid.focus();
        return;
      }

      message.textContent = "Succès : formulaire validé.";
      message.classList.add("is-success");
      message.classList.remove("is-error");
      showToast("Formulaire envoyé");
      form.reset();
    });
  });
})();
