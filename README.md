# NairaSave — Save in Dollars. Grow Beyond Inflation.

> A pixel-perfect, fully responsive fintech landing page built for the NTTS Week 1 Frontend Challenge.

![NairaSave Preview](./public/preview.png)

---

## 📌 Project Overview

**NairaSave** is a Lagos-based fintech startup launching a USD dollar-savings platform for Nigerians. This landing page is a pre-launch user acquisition site designed to:

- Communicate NairaSave's value proposition clearly and persuasively
- Let visitors instantly calculate their USD savings in Naira at the live parallel market rate
- Capture early sign-ups via a waitlist form
- Build trust through social proof, security messaging, and transparent product information

Built for the **Nigerian Tech Talent Spotlight (NTTS) Week 1 Pre-Launch Challenge** — and designed to be portfolio-worthy.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Live Currency Calculator** | Type any USD amount → instant Naira equivalent. Rate: 1 USD = ₦1,550. No button needed. |
| **Dark / Light Mode** | Full-site theme toggle with `localStorage` persistence and system preference detection. |
| **Interactive Hero Dashboard** | Fully custom React + Tailwind fintech dashboard card with animated progress bars and SVG sparkline chart — zero external images. |
| **FAQ Accordion** | Animated expand/collapse with ARIA attributes and keyboard accessibility. |
| **Waitlist Form** | Email validation with success state animation — no backend required. |
| **Framer Motion Animations** | Scroll-triggered fade-up reveals, hover effects, and micro-interactions throughout. |
| **Sticky Navbar** | Transparent → frosted glass on scroll, with smooth anchor navigation and mobile hamburger menu. |
| **Fully Responsive** | Tested at 320px, 375px, 390px, 425px, 768px, 1024px, and 1440px. |
| **Semantic HTML5** | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`, `<blockquote>` — no div soup. |
| **Accessible** | Skip-to-content link, ARIA labels, roles, `aria-expanded`, `aria-live` regions, keyboard focus styles. |

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 18 | UI framework |
| [Vite](https://vitejs.dev/) | 5 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations & transitions |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Icon library (HeroIcons, FontAwesome) |
| JavaScript (ES2022) | — | No TypeScript |

---

## 🚀 Running Locally

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/nairasave.git

# 2. Enter the project directory
cd nairasave

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The website will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

The optimized output will be in the `dist/` folder.

### Preview Production Build Locally

```bash
npm run preview
```

---

## 📦 Deployment

### Deploy to Netlify (Recommended)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --dir=dist --prod
```

Or connect the GitHub repository directly in the Netlify dashboard — it will auto-detect Vite and configure the build command.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

Vercel auto-detects Vite projects. No additional configuration required.

### Deploy to GitHub Pages

```bash
# Add homepage to package.json:
# "homepage": "https://YOUR_USERNAME.github.io/nairasave"

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy scripts to package.json:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

npm run deploy
```

---

## 📁 Project Structure

```
nairasave/
├── public/
│   └── preview.png           # Screenshot for README
├── src/
│   ├── components/
│   │   ├── Button.jsx         # Reusable animated button
│   │   ├── FadeUp.jsx         # Scroll-triggered animation wrapper
│   │   └── SectionLabel.jsx   # Section eyebrow label chip
│   ├── data/
│   │   └── index.js           # All content data + constants (exchange rate, etc.)
│   ├── sections/
│   │   ├── Navbar.jsx         # Sticky nav with dark mode toggle + mobile menu
│   │   ├── Hero.jsx           # Hero + built-in fintech dashboard card
│   │   ├── Trust.jsx          # Trust signals section
│   │   ├── Features.jsx       # 4 feature cards
│   │   ├── Calculator.jsx     # USD → NGN live calculator
│   │   ├── Benefits.jsx       # Benefits + comparison visual
│   │   ├── HowItWorks.jsx     # 3-step process
│   │   ├── Testimonials.jsx   # 3 testimonial cards
│   │   ├── FAQ.jsx            # Accordion FAQ
│   │   ├── Waitlist.jsx       # Final CTA + email form
│   │   └── Footer.jsx         # Footer with links + socials
│   ├── App.jsx                # Root component + dark mode logic
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles + Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 💱 Calculator Logic

The currency calculator uses a **hardcoded static parallel market rate** as required by the NTTS specification:

```js
const USD_TO_NGN = 1550; // 1 USD = ₦1,550

const ngnAmount = parseFloat(usdInput) * USD_TO_NGN;
```

- Accepts whole numbers and decimals (up to 2 decimal places)
- Updates in real time on every keystroke (no button required)
- Formats output using `Intl.NumberFormat` with Nigerian locale
- Shows empty state gracefully (no NaN or broken output)

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Primary | `#10B981` | CTAs, highlights, accents |
| Secondary | `#0F172A` | Dark backgrounds, text |
| Accent | `#F59E0B` | Stars, secondary highlights |
| Display font | Plus Jakarta Sans | Headings |
| Body font | Inter | Body copy, UI |

The design aesthetic targets **Wise × Chipper Cash** — a premium, trustworthy Nigerian fintech feel, not a luxury brand.

---

## ♿ Accessibility

- Skip-to-content link for keyboard users
- All interactive elements have visible focus rings
- `aria-label`, `aria-expanded`, `aria-live`, `aria-describedby` used appropriately
- Proper heading hierarchy (`h1` → `h2` → `h3`)
- Color contrast meets WCAG AA requirements
- Reduced motion respected by Framer Motion's default behavior

---

## 📸 Screenshots

> _Add screenshots here after deployment_

| Mobile (375px) | Tablet (768px) | Desktop (1440px) |
|---|---|---|
| _screenshot_ | _screenshot_ | _screenshot_ |

---

## 👤 Author



---

## 📄 License

This project was built as part of the **Nigerian Tech Talent Spotlight (NTTS) Week 1 Frontend Challenge**.

© 2025 Emmanuel Onyeka. All rights reserved.
