# DevStarter Kit

Plateforme frontend en français pour débutants avec templates HTML/CSS/JavaScript Vanilla prêts à copier-coller.

## Stack

- HTML5
- CSS3
- JavaScript Vanilla
- Aucune dépendance externe

## Lancer en local

1. Ouvrez `index.html` directement dans un navigateur, ou
2. Démarrez un serveur statique (Live Server, `python -m http.server`, etc.) puis ouvrez le site.

## Déploiement

### Netlify

1. Créez un site Netlify.
2. Importez le dépôt (ou glissez-déposez le dossier).
3. Paramètres :
   - Build command : vide
   - Publish directory : `.`
4. Déployez.

### Vercel

1. Créez un projet Vercel.
2. Importez le dépôt.
3. Paramètres :
   - Framework preset : `Other`
   - Build command : vide
   - Output directory : `.`
4. Déployez.

### GitHub Pages

1. Poussez le projet sur GitHub.
2. Ouvrez `Settings > Pages`.
3. Source : `Deploy from a branch`.
4. Sélectionnez `main` et `/ (root)`.

## Go-live Checklist (production)

1. Remplacez `https://example.com` par votre vrai domaine dans :
   - `sitemap.xml`
   - `robots.txt`
   - les balises OG/Twitter si vous gardez des URLs absolues
2. Vérifiez les pages légales :
   - `confidentialite.html`
   - `conditions.html`
   - `cookies.html`
3. Vérifiez les assets SEO/PWA :
   - `assets/icons/favicon.svg`
   - `assets/icons/apple-touch-icon.svg`
   - `assets/images/og-default.svg`
   - `site.webmanifest`
4. Contrôlez les redirections et headers :
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

