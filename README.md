# Gayathri N R — Portfolio

A simple, modern personal portfolio built with **Next.js 15 + React 18 + Tailwind CSS**, configured to be hosted **free, forever** on **GitHub Pages**.

## ✨ Features

- Hero, About, Projects, Skills, Contact, Footer sections
- Fully responsive (mobile + desktop)
- Dark gradient theme with Tailwind CSS
- Static export — no server needed
- One-command deploy to GitHub Pages

## 🛠 Local Development

```powershell
cd d:\React\portfolio
npm install
npm run dev
```

Open http://localhost:3000

## 🚀 Hosting on GitHub Pages (Free, Permanent)

The live URL after deployment will be:
**https://gayu123-byte.github.io/portfolio/**

> ⚠️ The repo MUST be named **`portfolio`** (matching `repo` in `next.config.ts`). If you want a different name, update `next.config.ts` accordingly.

### Option A — Auto-deploy with GitHub Actions (recommended)

A workflow file is already included at `.github/workflows/deploy.yml`. Every push to `main` will automatically build and deploy.

**One-time setup steps (run manually when YOU are ready):**

```powershell
cd d:\React\portfolio

# 1) Initialize git and commit
git init
git add .
git commit -m "Initial portfolio"
git branch -M main

# 2) Create an EMPTY repo named "portfolio" on GitHub (no README/license)
#    https://github.com/new

# 3) Connect & push (will prompt for your credentials / Personal Access Token)
git remote add origin https://github.com/Gayu123-byte/portfolio.git
git push -u origin main

# 4) On GitHub: Settings → Pages → Source: "GitHub Actions"
#    The workflow will run, build, and publish.
```

After ~1–2 minutes your site goes live at https://gayu123-byte.github.io/portfolio/

### Option B — Manual deploy via `gh-pages` branch

```powershell
npm install
npm run deploy
```

This builds the site and publishes the `out/` folder to a `gh-pages` branch.
Then on GitHub → Settings → Pages → Source: **Deploy from branch → `gh-pages` / root**.

## 📁 Project Structure

```
portfolio/
├── .github/workflows/deploy.yml    # GitHub Actions auto-deploy
├── next.config.ts                  # Static export + basePath config
├── package.json                    # Includes "deploy" script
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
```

## 🔒 Note on credentials

This project is **not auto-pushed**. You must run the git commands yourself when you're ready. Use a [Personal Access Token](https://github.com/settings/tokens) (classic, with `repo` scope) when git prompts for a password.

---

© Gayathri N R
