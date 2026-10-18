# AGENTS.md

This repository contains the personal portfolio of rubiotelmo0.
- [.devcontainer](.devcontainer): The development docker environment based on `mcr.microsoft.com/devcontainers/jekyll:2.2.7`
- [docs](docs): The jekyll static web page source
- [docs/assets](docs/assets): Static assets used by the portfolio, including the favicon source SVG
- [docs/favicon.ico](docs/favicon.ico): Root-level browser tab favicon served without theme overrides
- [README.md]: Quick docs for end users

The portfolio currently runs locally with `github-pages 232`, which resolves to Jekyll `3.10.0`.

## Working Agreement
Keep in mind that:
- You will be working in the .devcontainer environment
- You have to keep all the docs up-to-date, including this AGENTS.md file
- The generated code must be minimal, avoid excesive helper functions and similar approaches

## Style
- Separate project entries with `project-separator` horizontal rules, styled using Minima's spacing and the theme's muted grey border color.
- rubiotelmo0's portfolio must maintain a minimal and clean style
- The used jekyll base-theme is `minima`, with light (default) and dark palettes in `docs/assets/main.scss`. The header theme button stores the selection in localStorage; `docs/assets/theme.js` loads before CSS through the head override to avoid a theme flash. Keep its accessible labels localized and its keyboard focus visible. Remove Minima’s top header border in both themes. Keep text, links, navigation, and focus states readable in both themes in both languages.
- `docs/assets/main.scss` imports Minima and adds hover-only side-project illustration glows, with reduced-motion support. Apply `project-illustration` only to the paragraph wrapping side-project artwork; color modifiers match individual illustrations (purple for Obsidian). The academic diagram has no hover glow.
- Keep project images above their glow layer without blend modes so artwork retains its original colors.
- Preserve alpha transparency in all five PNG illustrations. The home illustration keeps black linework in the PNG and uses `.home-illustration` with `filter: invert(1)` to display pale linework in dark mode (no inversion in light mode). The academic diagram uses `FDP_photo.png` for dark mode and `FDP_photo_light.png` for light mode, with CSS showing only the matching image; retain the original photograph panels inside the academic diagram. Keep project artwork colors and hover glows intact.

## Analytics
- The public GA4 measurement ID is configured with `google_analytics` in `docs/_config.yml`.
- Keep the GA4 override in `docs/_includes/google-analytics.html`; Minima's bundled include uses legacy Analytics. The shared head loads the override only for production builds, in both languages.
- Validate that development builds omit the tag and production builds include it once per page. Use `JEKYLL_ENV=production bundle exec jekyll build` from `docs/` for production validation.

## Languages
- Keep English content at its existing URLs and Spanish (Spain) translations under `docs/es/`.
- Update both language versions together. Matching filenames pair pages for the header language switch.
- Style the language switch as a minimal outlined button with a visible keyboard focus state, retaining a link to the equivalent page. Show the destination code (ES or EN) with a country-neutral globe icon and a descriptive screen-reader label.
- Preserve original project names in both languages without italics, except the Spanish Obsidian title: «Gestión del conocimiento personal con Obsidian».
- Keep specialist English terms in Spanish prose in italics. Translate navigation, descriptions, and image alt text.
- Language defaults and the Spanish description live in `docs/_config.yml`; header/footer overrides localize shared navigation and footer copy.
- Use `relative_url` for shared asset paths in nested pages. Keep the root 404 page's Spanish recovery link for GitHub Pages.

## Docs
Find additional reliable information on:
- More on used Dockerfile: https://github.com/devcontainers/images/blob/main/src/jekyll/history/2.2.7.md
- Jekyll 3.10.0: https://github.com/jekyll/jekyll/tree/v3.10.0/docs
- Ruby 3.4.8: https://github.com/ruby/ruby/tree/v3_4_8/doc
- Minima 2.5.1: https://github.com/jekyll/minima/tree/v2.5.1

## Commands
Useful commands:
- jekyll build or jekyll b - Performs a one off build your site to ./_site (by default).
- jekyll serve or jekyll s - Builds your site any time a source file changes and serves it locally.
- jekyll clean - Removes all generated files: destination folder, metadata file, Sass and Jekyll caches.
- jekyll help - Shows help, optionally for a given subcommand, e.g. jekyll help build.
- jekyll doctor - Outputs any deprecation or configuration issues.
