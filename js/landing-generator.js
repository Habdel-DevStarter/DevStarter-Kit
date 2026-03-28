(function () {
  var heroSelect = document.getElementById("builderHero");
  var pricingSelect = document.getElementById("builderPricing");
  var ctaSelect = document.getElementById("builderCta");
  var footerSelect = document.getElementById("builderFooter");
  var generateBtn = document.getElementById("builderGenerate");
  var copyBtn = document.getElementById("builderCopy");
  var output = document.getElementById("builderOutput");

  if (!heroSelect || !pricingSelect || !ctaSelect || !footerSelect || !generateBtn || !copyBtn || !output) return;

  var sections = {
    hero: {
      saas:
        '<section class="hero"><h1>Accélérez votre frontend</h1><p>Templates modernes prêts à copier.</p><a class="btn btn--primary" href="#pricing">Voir les offres</a></section>',
      agency:
        '<section class="hero"><h1>Studio web orienté résultats</h1><p>Nous créons des interfaces performantes pour vos clients.</p><a class="btn btn--primary" href="#contact">Demander un devis</a></section>',
      product:
        '<section class="hero"><h1>Un produit qui simplifie votre workflow</h1><p>Adoptez des composants réutilisables et gagnez du temps.</p><a class="btn btn--primary" href="#pricing">Commencer</a></section>',
    },
    pricing: {
      three:
        '<section id="pricing" class="pricing"><article class="plan"><h3>Starter</h3><p>9€/mois</p></article><article class="plan"><h3>Pro</h3><p>29€/mois</p></article><article class="plan"><h3>Team</h3><p>79€/mois</p></article></section>',
      two:
        '<section id="pricing" class="pricing"><article class="plan"><h3>Basic</h3><p>12€/mois</p></article><article class="plan"><h3>Pro</h3><p>39€/mois</p></article></section>',
      none: "",
    },
    cta: {
      contact:
        '<section id="contact"><h2>Parlons de votre projet</h2><form><input type="text" placeholder="Nom" required><input type="email" placeholder="Email" required><button type="submit">Envoyer</button></form></section>',
      newsletter:
        '<section><h2>Recevez nos nouveautés</h2><form><input type="email" placeholder="Votre email" required><button type="submit">S\'abonner</button></form></section>',
      none: "",
    },
    footer: {
      simple: '<footer><p>© 2026 DevStarter Kit</p></footer>',
      columns:
        '<footer><section><h4>Produit</h4></section><section><h4>Ressources</h4></section><section><h4>Entreprise</h4></section></footer>',
    },
  };

  function generate() {
    var html =
      "<!doctype html>\n<html lang=\"fr\">\n<head>\n" +
      "  <meta charset=\"UTF-8\" />\n" +
      "  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n" +
      "  <title>Landing Générée</title>\n" +
      "</head>\n<body>\n" +
      sections.hero[heroSelect.value] +
      "\n" +
      sections.pricing[pricingSelect.value] +
      "\n" +
      sections.cta[ctaSelect.value] +
      "\n" +
      sections.footer[footerSelect.value] +
      "\n</body>\n</html>";

    output.textContent = html;
  }

  generateBtn.addEventListener("click", generate);
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.textContent).then(function () {
      if (window.DevStarterToast) window.DevStarterToast("Landing copiée");
    });
  });

  generate();
})();
