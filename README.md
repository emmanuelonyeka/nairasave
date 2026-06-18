# NairaSave — Save in Dollars. Grow Beyond Inflation.

> A production-quality fintech landing page and interactive savings dashboard, built for the **NTTS** Stage 2 Frontend Challenge by Team Guru.

---

## 📌 Project Overview

**NairaSave** is a Lagos-based fintech startup concept focused on helping Nigerians preserve wealth through **USD** savings.

The application is a modern React web experience combining:

1. **A conversion-focused fintech landing page**
   Showcasing NairaSave's value proposition, trust signals, product benefits, **FAQ**, and a live currency calculator.

2. **A dedicated interactive savings dashboard**
   A separate dashboard experience where users can enter a monthly **USD** savings goal and visualize their 12-month savings projection in both **USD** and Nigerian Naira.

Built for the **Nigerian Tech Talent Spotlight (**NTTS**) Stage 2 Frontend Challenge**.

---

# ✨ Features

## Landing Page

| Feature                             | Description                                                                                     |
| ----------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Responsive Fintech Landing Page** | Modern single-page marketing experience optimized for desktop and mobile.                       |
| **Live Currency Calculator**        | Convert USD ↔ NGN instantly using a configurable exchange rate.                                 |
| **Dark / Light Mode**               | Full application theme switching with localStorage persistence and system preference detection. |
| **Hero Dashboard Preview**          | Custom-built fintech dashboard card with SVG visualization.                                     |
| **FAQ Accordion**                   | Animated expandable questions with accessibility support.                                       |
| **Waitlist Form**                   | Email validation, loading state, and success feedback.                                          |
| **Responsive Navbar**               | Sticky navigation with mobile menu and smooth section scrolling.                                |

---

# Stage 2 — Savings Dashboard

The dashboard was upgraded into a **separate application route** instead of remaining as a landing page section.

Route:

`/dashboard`

Features:

| Feature                          | Description                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| **Savings Projection Dashboard** | Users enter monthly USD savings and instantly receive a 12-month projection.            |
| **Custom Projection Chart**      | Hand-built animated bar chart using React and Tailwind CSS. No chart libraries.         |
| **Projection Table**             | Month-by-month USD and NGN savings breakdown.                                           |
| **Summary Cards**                | Displays monthly savings, yearly USD total, NGN value, and growth information.          |
| **Dynamic Insight Panel**        | Generates personalized savings insights based on user input.                            |
| **Chart / Table Tabs**           | Users can switch between visual and tabular views.                                      |
| **Input Validation**             | Handles empty values, negative numbers, zero values, decimals, NaN, and maximum limits. |
| **Responsive Layout**            | Optimized dashboard experience across desktop, tablet, and mobile screens.              |

---

# 🛠 Tech Stack

| Technology        | Role                                 |
| ----------------- | ------------------------------------ |
| React 18          | Component-based UI development       |
| Vite 5            | Development server and build tooling |
| Tailwind CSS 3    | Responsive styling system            |
| React Router DOM  | Multi-page route navigation          |
| Framer Motion 11  | Animations and transitions           |
| React Icons       | UI icons                             |
| JavaScript ES2022 | Application logic                    |

> No external chart libraries were used. The dashboard visualization was created entirely with React components and Tailwind **CSS**.

---

# 📐 Dashboard Logic

## Projection Formula

````For each month (1 - 12):

**USD** Saved: monthlyAmount × month

**NGN** Value: **USD** Saved × exchangeRate ```

Current exchange rate:

``` 1 **USD** = ₦1,**550** ```

---

## Input Handling

| Input              | Result                         |
| ------------------ | ------------------------------ |
| Empty input        | Displays dashboard placeholder |
| `0`                | Shows validation message       |
| Negative values    | Prevented with validation      |
| Decimal values     | Supported                      |
| Values above limit | Shows user-friendly error      |
| Valid amount       | Generates complete projection  |

---

# 🌙 Theme System

Dark mode is handled globally at application level.

Features:

- Shared state between landing page and dashboard
- Persists user preference using localStorage
- Detects operating system theme preference
- Works across routes

Implementation:

``` App.jsx ├── darkMode state ├── Theme persistence └── Route sharing ```

---

# 🚦 Application Routing

The application now uses route separation:

``` / ### Landing Page

/dashboard ### Savings Dashboard ```

Structure:

````

BrowserRouter
└── Routes
├── LandingPage
└── DashboardPage

````

The landing page contains:

``` Navbar Hero Trust Features Calculator Benefits HowItWorks **FAQ** Waitlist Footer ```

The dashboard is an independent page experience.

---

# 📁 Project Structure

``` nairasave/ │ ├── src/ │ ├── components/ │   ├── Button.jsx │   ├── FadeUp.jsx │   └── SectionLabel.jsx │ ├── pages/ │ │   ├── Landingpage/ │   │   ├── Navbar.jsx │   │   ├── Hero.jsx │   │   ├── Trust.jsx │   │   ├── Features.jsx │   │   ├── Calculator.jsx │   │   ├── Benefits.jsx │   │   ├── HowItWorks.jsx │   │   ├── **FAQ**.jsx │   │   ├── Waitlist.jsx │   │   └── Footer.jsx │ │   └── Dashboard/ │       ├── DashboardPage.jsx │       ├── ProjectionChart.jsx │       ├── ProjectionTable.jsx │       └── SummaryCard.jsx │ ├── hooks/ │   └── useSavingsProjection.js │ ├── utils/ │   └── projection.js │ ├── data/ │   └── index.js │ ├── App.jsx ├── main.jsx └── index.css ```

---

# ♿ Accessibility

Implemented:

- Semantic **HTML** structure
- Keyboard navigation support
- **ARIA** labels
- **ARIA** live regions
- Accessible form states
- Screen-reader friendly dashboard chart descriptions
- Proper heading hierarchy
- Responsive mobile navigation

---

# 🚀 Running Locally

## Requirements

- Node.js v18+
- npm v9+

Install:

```bash git clone [https://github.com/emmanuelonyeka/nairasave.git](https://github.com/emmanuelonyeka/nairasave.git)

cd nairasave

npm install ```

Run:

```bash npm run dev ```

Open:

``` [http://localhost:**5173**](http://localhost:**5173**) ```

---

## Production Build

```bash npm run build ```

Preview:

```bash npm run preview ```

---

# 📦 Deployment

Recommended platforms:

- Netlify
- Vercel

Build command:

``` npm run build ```

Output:

``` dist/ ```

---

# 🎨 Design System

| Token        | Value             |
| ------------ | ----------------- |
| Primary      | `#10B981`         |
| Secondary    | `#0F172A`         |
| Accent       | `#F59E0B`         |
| Heading Font | Plus Jakarta Sans |
| Body Font    | Inter             |

---

# 🔮 Future Improvements

- Interest rate calculations
- Savings goal categories
- Export dashboard reports
- Real-time exchange rate **API**
- User authentication
- Saved savings plans
- Notification reminders

---

# 👥 Team Guru — NTTS Stage 2

**Track:** Frontend Web Development **Stage:** Stage 2 — Interactive Dashboard Extension **Cohort:** **NTTS** **2025**

| Role                    | Name       |
| ----------------------- | ---------- |
| Team Lead / Integration | Adaeze |
| UI Lead                 |Ajayi Akinola |
| Dashboard Lead          | Emmanuel Onyeka |
| Additional Contributors | __________ |

---

# 📄 License

Built for the **Nigerian Tech Talent Spotlight (**NTTS**) Stage 2 Frontend Challenge**.

© **2025** Team Guru · NairaSave
````
