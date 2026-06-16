# NairaSave — Save in Dollars. Grow Beyond Inflation.

> A production-quality fintech landing page and interactive savings dashboard, built for the NTTS Stage 2 Frontend Challenge by Team Guru.

---

## 📌 Project Overview

**NairaSave** is a Lagos-based fintech startup building a USD dollar-savings platform for Nigerians. This project is a single-page web application that combines:

1. **A high-converting landing page** — communicating NairaSave's value proposition, trust signals, features, and a live currency calculator (Stage 1).
2. **An interactive savings projection dashboard** — allowing users to enter a monthly USD savings target and see a full 12-month Naira/USD projection, complete with a custom-built bar chart and data table (Stage 2).

Built for the **Nigerian Tech Talent Spotlight (NTTS) Stage 2 Frontend Challenge**.

---

## ✨ Features

### Stage 1 (Retained & Improved)
| Feature | Description |
|---|---|
| **Live Currency Calculator** | USD → NGN or NGN → USD instant conversion. Rate: 1 USD = ₦1,550. Direction-switchable. |
| **Dark / Light Mode** | Full-site theme with `localStorage` persistence and system preference detection. |
| **Hero Dashboard Card** | Custom React + Tailwind fintech dashboard card with SVG sparkline — zero external images. |
| **FAQ Accordion** | Animated expand/collapse with full ARIA support. |
| **Waitlist Form** | Email validation, loading state, and success animation. |
| **Sticky Navbar** | Smooth anchor navigation, frosted glass on scroll, mobile hamburger menu. |

### Stage 2 (New)
| Feature | Description |
|---|---|
| **Savings Projection Dashboard** | Enter monthly USD → get 12-month projection in USD and NGN. Live, no button needed. |
| **Custom Bar Chart** | Hand-built with React + Tailwind. Zero chart libraries. Animated bar growth on load. |
| **Projection Table** | Month-by-month breakdown with highlighted final row and totals footer. |
| **Summary Cards** | Monthly deposit, 12-month USD total, NGN value, and growth percentage. |
| **Insight Panel** | Contextual financial insight generated dynamically from the user's input. |
| **Tab Switcher** | Toggle between Chart view and Table view within the dashboard. |
| **Full Edge Case Handling** | Zero, negative, blank, NaN, and values over $1M all handled gracefully — no crashes. |

---

## 🛠 Tech Stack

| Technology | Version | Role |
|---|---|---|
| [React](https://react.dev/) | 18 | UI framework |
| [Vite](https://vitejs.dev/) | 5 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | 11 | Animations & transitions |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Icon library |
| JavaScript (ES2022) | — | No TypeScript |

> **No external chart libraries were used.** The bar chart is built entirely with React components and Tailwind CSS utility classes, as required by the NTTS Stage 2 specification.

---

## 📐 Dashboard Logic

### Projection Formula
```
For each month (1–12):
  Total USD Saved = monthlyAmount × month
  Total NGN Value = Total USD Saved × 1550
```

### Edge Case Handling
| Input | Behavior |
|---|---|
| Empty / blank | Shows "Enter an amount to see your projection" placeholder |
| Zero (`0`) | Shows error: "Enter an amount greater than $0" |
| Negative (`-10`) | Shows error: "Amount cannot be negative" |
| Over $1,000,000 | Shows error: "Please enter an amount under $1,000,000" |
| Decimal (`$50.50`) | Accepted, calculated correctly |
| Very large valid (`$999,999`) | Calculated and displayed correctly |

---

## 🚀 Running Locally

### Prerequisites
- Node.js v18+
- npm v9+

### Steps
```bash
# Clone the repository
git clone https://github.com/emmanuelonyeka/nairasave.git

# Navigate into the project
cd nairasave

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

### Build for Production
```bash
npm run build
```

Output goes into the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

---

## 📦 Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect repo in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

Netlify auto-deploys on every push to `main`.

### Vercel
```bash
npm install -g vercel
vercel --prod
```

---

## 📁 Project Structure

```
nairasave/
├── src/
│   ├── components/          # Reusable UI primitives
│   │   ├── Button.jsx
│   │   ├── FadeUp.jsx
│   │   └── SectionLabel.jsx
│   ├── dashboard/           # Stage 2 dashboard components
│   │   ├── ProjectionChart.jsx   # Custom bar chart (no libraries)
│   │   ├── ProjectionTable.jsx   # Month-by-month data table
│   │   └── SummaryCard.jsx       # Summary stat cards
│   ├── hooks/               # Custom React hooks
│   │   └── useSavingsProjection.js
│   ├── sections/            # Page sections
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Trust.jsx
│   │   ├── Features.jsx
│   │   ├── Calculator.jsx
│   │   ├── Dashboard.jsx    # Stage 2 dashboard section
│   │   ├── Benefits.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── FAQ.jsx
│   │   ├── Waitlist.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── index.js         # All content + constants (exchange rate)
│   ├── utils/
│   │   └── projection.js    # Projection math, formatters, insight generator
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| Primary | `#10B981` | CTAs, highlights, chart bars |
| Secondary | `#0F172A` | Dark backgrounds, headings |
| Accent | `#F59E0B` | Stars, secondary highlights |
| Display font | Plus Jakarta Sans | Headings |
| Body font | Inter | Body copy, UI labels |

---

## ♿ Accessibility

- Skip-to-content link
- Full keyboard navigation
- `aria-label`, `aria-expanded`, `aria-live`, `aria-describedby`, `aria-invalid` throughout
- Proper heading hierarchy (h1 → h2 → h3)
- Table with `scope`, `role`, and caption support
- Chart bars have `role="img"` and `aria-label` with values
- WCAG AA color contrast on all text

---

## 🔮 Future Improvements

- [ ] Interest rate toggle (add 3% / 5% annual interest to projections)
- [ ] Export projection as PDF or CSV
- [ ] Multiple savings goals (emergency fund, travel, investment)
- [ ] Live exchange rate via API (CBN / parallel market feed)
- [ ] Push notifications for savings milestones
- [ ] User authentication and saved projections

---

## 👥 Team Guru — NTTS Stage 2

**Track:** Front End Web Development  
**Stage:** 2 — Interactive Dashboard Extension  
**Cohort:** NTTS 2025

| Role | Name | GitHub |
|---|---|---|
| Team Lead / Integration | _______________ | @_______________ |
| UI Lead | _______________ | @_______________ |
| Logic & Dashboard Lead | _______________ | @_______________ |
| _(add more as needed)_ | | |

---

## 📄 License

Built as part of the **Nigerian Tech Talent Spotlight (NTTS) Stage 2 Frontend Challenge**.

© 2025 Team Guru · NairaSave. All rights reserved.
