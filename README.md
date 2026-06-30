# rubiotelmo0.github.io

[![Jekyll 3.10.0](https://img.shields.io/badge/Jekyll-3.10.0-CC0000?logo=jekyll&logoColor=white)](https://github.com/jekyll/jekyll/tree/v3.10.0/docs)
[![Ruby 3.4.8](https://img.shields.io/badge/Ruby-3.4.8-CC342D?logo=ruby&logoColor=white)](https://github.com/ruby/ruby/tree/v3_4_8/doc)
[![Minima 2.5.1](https://img.shields.io/badge/Theme-minima%202.5.1-2ea44f)](https://github.com/jekyll/minima)
[![GitHub Pages 232](https://img.shields.io/badge/GitHub%20Pages-232-222222?logo=githubpages&logoColor=white)](https://pages.github.com/versions/)
[![Devcontainer Ready](https://img.shields.io/badge/Devcontainer-ready-007ACC?logo=visualstudiocode&logoColor=white)](./.devcontainer)

Personal portfolio site of Telmo Rubio Etxabe, built with Jekyll and the `minima` theme.
The source site lives in [`docs/`](./docs), and the recommended workflow is to use the provided VS Code devcontainer.

## Repository Layout
- [`.devcontainer/`](./.devcontainer): container definition for local development.
- [`docs/`](./docs): Jekyll source files, pages, assets, and Ruby dependencies.
- [`docs/favicon.ico`](./docs/favicon.ico): browser tab icon served from the site root without theme overrides.
- [`docs/index.markdown`](./docs/index.markdown): home page content.
- [`docs/education.markdown`](./docs/education.markdown): education page content.
- [`docs/work-experience.markdown`](./docs/work-experience.markdown): work experience page content.
- [`docs/academic-projects.markdown`](./docs/academic-projects.markdown): academic projects page content.
- [`docs/side-projects.markdown`](./docs/side-projects.markdown): side projects page content.
- [`docs/_config.yml`](./docs/_config.yml): site metadata and Jekyll configuration.
- [`docs/assets/`](./docs/assets): static image assets used by the portfolio, including the favicon source SVG.
- `docs/_site/`: generated output from local builds. Do not edit it manually.
- [`AGENTS.md`](./AGENTS.md): repository-specific instructions for coding agents.

## Current Setup
- Development environment: VS Code devcontainer.
- Devcontainer base image: `mcr.microsoft.com/devcontainers/jekyll:2.2.7`.
- Ruby version in the container: `3.4.8`.
- Local site bundle currently resolves to `github-pages 232`, `jekyll 3.10.0`, and `minima 2.5.1`.
- Site source directory: `docs/`.
- Build output directory: `docs/_site/`.
- Browser tab icon: `docs/favicon.ico`, with matching source artwork in `docs/assets/favicon.svg`.
- Publication status: local development is ready, and the repository now matches the GitHub Pages `/docs` publishing layout.

## Getting Started
These steps set up the portfolio for local development inside the containerized environment.

### Prerequisites
- VS Code.
- The Dev Containers extension for VS Code.
- Docker Desktop or another container runtime compatible with Dev Containers.
- Git access to this repository.
- Optional: SSH keys loaded in your local SSH agent if you use SSH remotes.

### Installation
1. Clone the repository.
2. Set `RUBIOTELMO0_PAGES_DEV_GIT_NAME` and `RUBIOTELMO0_PAGES_DEV_GIT_EMAIL` in the shell you will use to launch VS Code.
3. From that same shell, move to the repository root and run `code .`.
4. In VS Code, run `Dev Containers: Reopen in Container`.
5. Once the container starts, move to `docs/` and run `bundle install` if dependencies need to be installed or refreshed.

### Usage
Run the portfolio locally from `docs/`:

```bash
bundle exec jekyll serve --livereload --host 0.0.0.0
```

Then open `http://127.0.0.1:4000`.

For one-off validation commands:

```bash
bundle exec jekyll build
bundle exec jekyll doctor
```

### [`.devcontainer`](./.devcontainer)
This repo ships with a VS Code devcontainer environment to make development simpler.
The portfolio currently runs locally with the GitHub Pages dependency set, which resolves to Jekyll `3.10.0`.
The devcontainer base image tag `mcr.microsoft.com/devcontainers/jekyll:2.2.7` refers to the container image release, not the local Jekyll runtime used by the site.

#### Configuring Git
Follow the steps in the sections below to configure Git inside the container.

> [!WARNING]
> As stated in [Launching VS Code with Git config](#launching-vs-code-with-git-config), start VS Code (`code .`) from the same shell where you ran the configuration commands.

##### Setting up git `user.name` and `user.email`
Set the following environment variables; they are passed to the devcontainer automatically.

**Windows**

```powershell
$env:RUBIOTELMO0_PAGES_DEV_GIT_NAME = "Your Name"
$env:RUBIOTELMO0_PAGES_DEV_GIT_EMAIL = "your@email.com"
```

**Linux**

```bash
export RUBIOTELMO0_PAGES_DEV_GIT_NAME="Your Name"
export RUBIOTELMO0_PAGES_DEV_GIT_EMAIL="your@email.com"
```

> [!NOTE]
> You only need to perform these steps when you create or rebuild the devcontainer, not every time you start it.

##### Setting up git SSH keys
If you use Git with SSH keys, follow these steps. Full reference: <https://code.visualstudio.com/remote/advancedcontainers/sharing-git-credentials>.

> [!NOTE]
> You need to initialize the SSH agent and load keys each time you start the container.

**1. Automatically initialize the SSH agent**

**Windows**: Start a local Administrator PowerShell session and run:

```powershell
Set-Service ssh-agent -StartupType Automatic
Start-Service ssh-agent
Get-Service ssh-agent
```

**Linux**: Start the SSH agent in the background:

```bash
eval "$(ssh-agent -s)"
```

**2. Add your keys to the SSH agent**

```bash
ssh-add
ssh-add <path/to/your/key>
```

##### Launching VS Code with Git config
Using the same shell where you configured the environment variables, move to the repository directory and launch VS Code:

```bash
cd /path/to/repo
code .
```

### Persisted codex data
Codex data under `~/.codex` is persisted in a Docker volume mounted at `/home/vscode/.codex`. The volume name is `${localWorkspaceFolderBasename}-codex`, so for a repo folder named `my-repo` it becomes `my-repo-codex`.

#### Starting devcontainer
Once the Git configuration steps are completed:

1. Press `Ctrl + Shift + P` to open the command palette.
2. Run `Dev Containers: Reopen in Container`.
3. Wait for the environment to finish building.


## Publication Notes
- The portfolio source is stored under `docs/`, not at the repository root.
- GitHub Pages can publish directly from the default branch `docs/` folder when that source option is enabled in repository settings.
- The current local dependency set is aligned with the GitHub Pages gem through `github-pages 232`.


## Authors
Telmo Rubio - [LinkedIn](https://www.linkedin.com/in/telmo-rubio-8aa41b258/)

## References
- (Accessed April 12, 2026) Devcontainer Jekyll image history: https://github.com/devcontainers/images/blob/main/src/jekyll/history/2.2.7.md
- (Accessed April 12, 2026) Jekyll 3.10.0 docs: https://github.com/jekyll/jekyll/tree/v3.10.0/docs
- (Accessed April 12, 2026) Ruby 3.4.8 docs: https://github.com/ruby/ruby/tree/v3_4_8/doc
- (Accessed April 12, 2026) GitHub Pages dependency versions: https://pages.github.com/versions/
- (Accessed April 11, 2026) GitHub Pages creation tutorial: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll?platform=linux
- (Accessed April 11, 2026) Local execution with Jekyll: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll
- (Accessed April 11, 2026) Minima theme: https://github.com/jekyll/minima
