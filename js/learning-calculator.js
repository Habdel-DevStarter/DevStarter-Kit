(function () {
  var level = document.getElementById("calcLevel");
  var goal = document.getElementById("calcGoal");
  var hours = document.getElementById("calcHours");
  var run = document.getElementById("calcRun");
  var summary = document.getElementById("calcSummary");
  var plan = document.getElementById("calcPlan");

  if (!level || !goal || !hours || !run || !summary || !plan) return;

  var goals = {
    portfolio: { beginner: 120, intermediate: 60, label: "Portfolio solide" },
    freelance: { beginner: 180, intermediate: 90, label: "Premiers clients freelance" },
    job: { beginner: 240, intermediate: 130, label: "Candidature junior" },
  };

  function buildPlan(goalKey) {
    if (goalKey === "portfolio") {
      return [
        "Semaine 1-3 : HTML/CSS + composants de base",
        "Semaine 4-6 : layouts + responsive + dark mode",
        "Semaine 7+ : portfolio final + optimisation",
      ];
    }
    if (goalKey === "freelance") {
      return [
        "Étape 1 : templates réutilisables et rapidité d'intégration",
        "Étape 2 : mini-projets réels (landing + pricing + contact)",
        "Étape 3 : offre freelance, process client et livraison",
      ];
    }
    return [
      "Bloc 1 : fondamentaux frontend et architecture de code",
      "Bloc 2 : projets complets + accessibilité + UX",
      "Bloc 3 : préparation portfolio + candidatures + tests techniques",
    ];
  }

  run.addEventListener("click", function () {
    var h = Number(hours.value);
    if (!h || h < 2) {
      summary.textContent = "Veuillez entrer au moins 2h/semaine.";
      return;
    }

    var cfg = goals[goal.value];
    var totalHours = cfg[level.value];
    var weeks = Math.ceil(totalHours / h);

    summary.textContent =
      "Objectif : " + cfg.label + " • Charge estimée : " + totalHours + "h • Durée estimée : " + weeks + " semaines.";

    plan.innerHTML = buildPlan(goal.value)
      .map(function (step) {
        return '<article class="card"><p>' + step + "</p></article>";
      })
      .join("");
  });
})();
