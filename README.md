# My Portfolio Website

A creative, responsive portfolio website with a unique **boy-pushing-wall** scroll animation.

## Features

- **Interactive Intro Animation** — A CSS-drawn boy character pushes against a wall. As you scroll, the wall cracks and the entire intro scene slides away to reveal the portfolio.
- **Fully Responsive** — Works on desktop, tablet, and mobile (touch support included).
- **Smooth Animations** — Scroll-reveal sections, skill bar animations, glitch text effects, and floating particles.
- **Sections** — Hero, About, Skills, Projects, Contact.
- **Zero Dependencies** — Pure HTML, CSS, and vanilla JavaScript. No build tools needed.

## How to Use

1. Clone this repo
2. Edit `index.html` to add your own name, info, projects, and links
3. Replace placeholder content with your real data
4. Push to a GitHub repo and enable **GitHub Pages** in Settings → Pages → Source: `main` branch

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Then go to **Settings → Pages → Source: Deploy from branch → main → / (root)** → Save.

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Customization

| What | Where |
|------|-------|
| Your name & title | `index.html` → Hero section |
| About text & stats | `index.html` → About section |
| Skills & percentages | `index.html` → Skills section (`data-width` attributes) |
| Projects | `index.html` → Projects section |
| Contact info & socials | `index.html` → Contact section |
| Colors & theme | `style.css` → `:root` variables |
| Typewriter titles | `script.js` → `titles` array |

## License

MIT — Free to use and modify.
