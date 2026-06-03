# Joey Capps Portfolio

A modern responsive personal portfolio site for Joey Capps, built with React,
Vite, and TailwindCSS.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This repo is set up for GitHub Pages with GitHub Actions.

1. Push the project to `https://github.com/caJoey/caJoey.github.io`.
2. In GitHub, open the repository settings.
3. Go to **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to the `main` branch.

GitHub will run `.github/workflows/deploy.yml`, build the Vite app, and publish
the `dist` folder.

The site will be available at:

```text
https://caJoey.github.io
```
