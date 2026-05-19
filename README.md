# Barrister Robert Johnson — Personal Lawyer Website

  ## Quick Start
  1. Install Node.js (v18+): https://nodejs.org
  2. Install pnpm:  npm install -g pnpm
  3. Install dependencies:  pnpm install
  4. Start dev server:  pnpm run dev
  5. Open http://localhost:5173

  ## Deploy to GitHub Pages
  1. pnpm run build
  2. cd dist
  3. git init
  4. git add .
  5. git commit -m "Deploy"
  6. git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
  7. git push origin HEAD:gh-pages --force
  8. In GitHub repo: Settings -> Pages -> branch "gh-pages" -> Save
  