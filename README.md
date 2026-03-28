# DevStarter Kit

Plateforme frontend en franÃ§ais pour dÃ©butants avec templates HTML/CSS/JavaScript Vanilla prÃªts Ã  copier-coller.

## Stack

- HTML5
- CSS3
- JavaScript Vanilla
- Aucune dÃ©pendance externe

## Lancer en local

1. Ouvrez `index.html` directement dans un navigateur, ou
2. DÃ©marrez un serveur statique (Live Server, `python -m http.server`, etc.) puis ouvrez le site.

## DÃ©ploiement

### Netlify

1. CrÃ©ez un site Netlify.
2. Importez le dÃ©pÃ´t (ou glissez-dÃ©posez le dossier).
3. ParamÃ¨tres :
   - Build command : vide
   - Publish directory : `.`
4. DÃ©ployez.

### Vercel

1. CrÃ©ez un projet Vercel.
2. Importez le dÃ©pÃ´t.
3. ParamÃ¨tres :
   - Framework preset : `Other`
   - Build command : vide
   - Output directory : `.`
4. DÃ©ployez.

### GitHub Pages

1. Poussez le projet sur GitHub.
2. Ouvrez `Settings > Pages`.
3. Source : `Deploy from a branch`.
4. SÃ©lectionnez `main` et `/ (root)`.

## Go-live Checklist (production)

1. Remplacez `https://habdel-devstarter.github.io/DevStarter-Kit` par votre vrai domaine dans :
   - `sitemap.xml`
   - `robots.txt`
   - les balises OG/Twitter si vous gardez des URLs absolues
2. VÃ©rifiez les pages lÃ©gales :
   - `confidentialite.html`
   - `conditions.html`
   - `cookies.html`
3. VÃ©rifiez les assets SEO/PWA :
   - `assets/icons/favicon.svg`
   - `assets/icons/apple-touch-icon.svg`
   - `assets/images/og-default.svg`
   - `site.webmanifest`
4. ContrÃ´lez les redirections et headers :
   - Netlify : `_redirects`, `_headers`
   - Vercel : `vercel.json`
5. Testez rapidement :
   - mobile (320px), tablette (768px), desktop (1024px+)
   - menu mobile, dark mode, copy code, recherche/filtres, formulaires

## Pages principales

- `index.html`
- `templates.html`
- `navbar.html`
- `footer.html`
- `cards.html`
- `forms.html`
- `buttons.html`
- `modals.html`
- `layout.html`
- `pricing.html`
- `defis.html`
- `theme.html`
- `projets.html`
- `blog.html`


