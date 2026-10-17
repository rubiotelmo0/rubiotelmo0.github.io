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
- Separate project entries with `project-separator` horizontal rules, styled using Minima's spacing and light grey border color.
- rubiotelmo0's portfolio must maintain a minimal and clean style
- The used jekyll base-theme is `minima`
- `docs/assets/main.scss` imports Minima and adds hover-only project illustration glows, with reduced-motion support. Apply `project-illustration` to the paragraph wrapping project artwork; color modifiers match individual illustrations (purple for Obsidian).
- Keep project images above their glow layer without blend modes so artwork retains its original colors.
- Preserve alpha transparency in the Obsidian and Keyboard Poisoning PNG illustrations so their backgrounds do not obscure the hover glows.

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
