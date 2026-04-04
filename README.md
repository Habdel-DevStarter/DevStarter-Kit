# DevStarter Kit

> Bibliothèque de templates HTML, CSS et JavaScript vanilla pour développeurs débutants.  
> Copiez, collez, apprenez. Zéro dépendance. 100% gratuit.

[![License: MIT](https://img.shields.io/badge/License-MIT-6C63FF.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-0FCCCE.svg)](changelog.html)
[![Templates](https://img.shields.io/badge/templates-26-FF6584.svg)](templates.html)
[![Vanilla JS](https://img.shields.io/badge/JS-Vanilla-F9E2AF.svg)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-10B981.svg)](contribuer.html)

---

## 🚀 Démo en ligne

**[https://habdel-devstarter.github.io/DevStarter-Kit](https://habdel-devstarter.github.io/DevStarter-Kit)**

---

## 📦 Ce que contient le kit

| Catégorie | Nombre | Niveaux |
|-----------|--------|---------|
| 🔝 Navbar | 5 templates | Débutant → Avancé |
| ⬇️ Footer | 5 templates | Débutant → Avancé |
| 🃏 Cards  | 10 templates | Débutant → Avancé |
| 📝 Forms  | 6 templates  | Débutant → Avancé |
| **Total** | **26 templates** | |

---

## ⚡ Installation

### Option 1 — Téléchargement direct

```bash
# Téléchargez le ZIP depuis GitHub et extrayez-le
# Ouvrez index.html dans votre navigateur
```

### Option 2 — Git clone

```bash
git clone https://github.com/devstarterkit/devstarter-kit.git
cd devstarter-kit
# Ouvrez index.html — aucun npm install requis
```

### Option 3 — Copier un seul template

1. Ouvrez la page de la catégorie voulue (`navbar.html`, `cards.html`…)
2. Cliquez sur l'onglet **HTML** ou **CSS** du template
3. Cliquez sur **📋 Copier**
4. Collez dans votre projet

> ⚠️ Si vous copiez un template isolé, pensez à inclure les variables CSS depuis `css/variables.css`.

---

## 🗂️ Structure du projet

```
devstarter-kit/
│
├── index.html           # Accueil
├── templates.html       # Catalogue + recherche/filtres
├── navbar.html          # 5 templates Navbar
├── footer.html          # 5 templates Footer
├── cards.html           # 10 templates Cards
├── forms.html           # 6 templates Forms
├── about.html           # À propos
├── contribuer.html      # Guide de contribution
├── contact.html         # Contact
├── docs.html            # Documentation
├── changelog.html       # Historique des versions
├── 404.html             # Page d'erreur personnalisée
├── sitemap.xml          # Sitemap SEO
├── robots.txt           # Directives crawlers
│
├── css/
│   ├── variables.css    # Variables CSS (couleurs, espacements, polices)
│   ├── style.css        # Styles globaux
│   ├── layout.css       # Navbar, footer, hero, page structure
│   ├── components.css   # Composants réutilisables
│   ├── animations.css   # Keyframes et classes d'animation
│   └── responsive.css   # Media queries
│
├── js/
│   ├── main.js          # Init globale, navbar, scroll, reveal, tabs
│   ├── darkmode.js      # Toggle dark/light + persistance
│   ├── copy.js          # Copy clipboard + feedback + ripple
│   ├── search.js        # Recherche, filtres, FilterGrid
│   └── data.js          # Catalogue des templates (données)
│
└── assets/
    ├── favicon.svg
    ├── apple-touch-icon.png
    └── og-image.svg
```

---

## ✨ Fonctionnalités

- **26 templates** prêts à copier-coller
- **Dark mode** persistant (localStorage + prefers-color-scheme)
- **Recherche + filtres** en temps réel sur tous les templates
- **Copy to clipboard** avec feedback visuel "Copié ✔"
- **Formulaires** avec validation JavaScript complète
- **Responsive** — mobile, tablette, desktop
- **Animations** au scroll (IntersectionObserver)
- **Toast notifications**, scroll-to-top, page loader
- **Accessibilité** — ARIA, semantic HTML, prefers-reduced-motion
- **0 dépendance** — HTML5, CSS3, Vanilla JS uniquement

---

## 🎨 Système de design

Le projet utilise un système de variables CSS cohérent :

```css
:root {
  --primary:   #6C63FF;   /* Violet principal */
  --secondary: #0FCCCE;   /* Cyan accent */
  --accent:    #FF6584;   /* Rose highlight */
  --bg:        #F7F8FC;   /* Fond de page */
  --bg-card:   #FFFFFF;   /* Fond cartes */
  --text:      #1A1A2E;   /* Texte principal */
}
```

Toutes les valeurs basculent automatiquement en dark mode via `[data-theme="dark"]`.

---

## 📖 Documentation

La documentation complète est disponible sur [https://habdel-devstarter.github.io/DevStarter-Kit/docs.html](https://habdel-devstarter.github.io/DevStarter-Kit/docs.html).

Elle couvre :
- Guide d'installation et utilisation
- Référence complète des variables CSS
- API des modules JavaScript
- Convention BEM
- Standards de contribution

---

## 🤝 Contribuer

Les contributions sont les bienvenues ! Consultez le [guide de contribution](https://habdel-devstarter.github.io/DevStarter-Kit/contribuer.html) pour :

- Ajouter un nouveau template
- Corriger un bug
- Améliorer la documentation
- Proposer une nouvelle fonctionnalité

### Workflow rapide

```bash
# 1. Forkez le dépôt
# 2. Créez une branche
git checkout -b feature/mon-template

# 3. Développez (respectez les standards : BEM, CSS variables, no frameworks)

# 4. Commitez
git commit -m "feat: ajoute hero section avec gradient"

# 5. Ouvrez une Pull Request
```

**Standards requis** : HTML sémantique · BEM · CSS variables · Responsive · Dark mode · Zéro dépendance externe

---

## 📋 Changelog

Consultez le [changelog complet](https://habdel-devstarter.github.io/DevStarter-Kit/changelog.html) pour l'historique des versions.

| Version | Date | Highlights |
|---------|------|-----------|
| v1.0.0 | Mars 2025 | Lancement public, 26 templates, docs, changelog |
| v0.9.0 | Fév 2025 | Footers, dark mode persistant, animations refonte |
| v0.8.0 | Fév 2025 | Recherche + filtres, module copy.js, toasts |
| v0.7.0 | Jan 2025 | 5 templates Navbar, système d'onglets |
| v0.1.0 | Nov 2024 | Commit initial, 3 navbars |

---

## 📄 Licence

Ce projet est sous licence **MIT** — vous pouvez l'utiliser, le modifier et le redistribuer librement, y compris pour des projets commerciaux.

Voir [LICENSE](LICENSE) pour le texte complet.

---

## 💬 Contact

- **Site** : [https://habdel-devstarter.github.io/DevStarter-Kit](https://habdel-devstarter.github.io/DevStarter-Kit)
- **Email** : [habdelcoulibaly01@gmail.com]
- **Twitter** : [@DevStarterKit](https://twitter.com/DevStarterKit)
- **GitHub Issues** : [Signaler un bug](https://github.com/devstarterkit/devstarter-kit/issues)
- **Discord** : [discord.gg/devstarterkit](https://discord.gg/devstarterkit)

---

<div align="center">
  Fait avec ❤️ pour la communauté francophone des développeurs web.
  <br>
  <a href="https://habdel-devstarter.github.io/DevStarter-Kit">DevStarter Kit</a>
</div>
