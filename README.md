# Hiren Keshvani - Portfolio

Personal portfolio site for **Hiren Keshvani**, a backend developer focused on **Java** and **Spring Boot**.

**Live site:** [https://hirenhkeshvani.github.io](https://hirenhkeshvani.github.io)

## About

Static, mobile-responsive portfolio highlighting experience, shipped products, skills, and contact details. Built for GitHub Pages with no build step or backend.

## Features

- Backend-first positioning (APIs, systems, Java / Spring Boot)
- Sections: Hero, About, Experience, Projects, Skills, Education, Contact
- Featured work: Immigration Questions, MyLegalSoftware, My Law Service
- Dark / light theme toggle with saved preference
- Resume download (`Hiren_Keshvani.pdf`)
- Accessible navigation (skip link, semantic HTML, keyboard-friendly controls)

## Tech stack

| Layer | Tools |
|-------|--------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, responsive layout) |
| Script | Vanilla JavaScript |
| Fonts | [DM Sans](https://fonts.google.com/specimen/DM+Sans), [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (Google Fonts) |
| Hosting | [GitHub Pages](https://pages.github.com/) |

## Project structure

```
.
├── index.html              # Main page
├── css/
│   └── style.css           # Styles (dark / light themes)
├── js/
│   └── main.js             # Nav, theme toggle, scroll effects
├── images/
│   ├── hiren-professional.jpg
│   └── hiren-casual.jpg
├── Hiren_Keshvani.pdf      # Resume
├── .nojekyll               # Required for GitHub Pages
└── .gitignore
```

## Run locally

No install required. From this folder:

**Option 1 - open in browser**

```bash
# Windows
start index.html
```

**Option 2 - simple local server (recommended)**

```bash
# Python 3
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy to GitHub Pages

1. Create a public repository named **`HirenHKeshvani.github.io`** (must match your GitHub username).
2. Push the site files to the **`main`** branch at the repository root.
3. In the repo: **Settings -> Pages -> Build and deployment -> Source:** Deploy from branch **`main`**, folder **`/ (root)`**.
4. After a few minutes, the site is live at [https://hirenhkeshvani.github.io](https://hirenhkeshvani.github.io).

### Files to include in the repo

- `index.html`, `css/style.css`, `js/main.js`
- `images/` (both photos)
- `Hiren_Keshvani.pdf`
- `.nojekyll`, `.gitignore`

Do **not** commit backups (e.g. `*.bak`), OS files, or secrets.

## Contact

| | |
|---|---|
| Email | [hirenkeshvani16187@gmail.com](mailto:hirenkeshvani16187@gmail.com) |
| LinkedIn | [linkedin.com/in/hirenkeshvani](https://linkedin.com/in/hirenkeshvani) |
| GitHub | [github.com/HirenHKeshvani](https://github.com/HirenHKeshvani) |
| X | [@keshvani_hiren](https://x.com/keshvani_hiren) |

## License

Copyright Hiren Keshvani. Site content and assets are for personal portfolio use unless otherwise noted.