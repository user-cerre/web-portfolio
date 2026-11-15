# Personal Web Portfolio

A responsive, static personal portfolio built for the **Web Development 2026** course (MDM — University of Coimbra). The website dynamically showcases my developer profile, GitHub activity, and software engineering projects by consuming the public GitHub REST API without third-party libraries[cite: 6].

🔗 **Live Website:** [https://user-cerre.github.io/web-portfolio/](https://user-cerre.github.io/web-portfolio/)

---

## Features

- **Dynamic GitHub Integration:** Fetches user profile data, profile `README.md`, and public repositories in real time via the GitHub REST API[cite: 6].
- **Interactive Language Filtering:** Allows visitors to filter projects dynamically by programming language (`JavaScript`, `HTML`, `Java`, `C++`, `Kotlin`, or `All`).
- **Dark / Light Mode:** Theme switcher powered by CSS Custom Properties (`:root` and `data-theme="dark"`).
- **Responsive Layout & CSS Animations:** Built with CSS Grid and Flexbox for mobile and desktop viewports, featuring keyframe entry animations (`fadeIn`) and card hover transitions[cite: 6].
- **Zero Dependencies:** Built exclusively with native HTML5, CSS3, and ES6 Modules[cite: 6].

---

## Project Structure

```text
├── index.html              # Main semantic HTML structure
├── README.md               # Project documentation
├── SEEME.mp4               # Demonstration video (< 1 minute)
└── src/
    ├── css/
    │   ├── style.css       # Layout, theme variables, and responsive rules
    │   └── animations.css  # Keyframes and interactive hover transitions
    └── js/
        ├── api.js          # GitHub REST API fetch requests
        ├── ui.js           # DOM manipulation and rendering functions
        └── app.js          # Application initialization, filters, and theme logic
```
---
## Author

**Carlos Paredes Ruiz**

Mestrado em Engenharia Informática — Universidade de Coimbra (UC)