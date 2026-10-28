# Control Systems Engineering Course Website

> **Theme & Tagline:** *"Control Systems Engineering: Make systems behave."*
> *Model it. Analyze it. Tune it. Prove it.*

Welcome to the official web platform for **Control Systems Engineering**. This web application provides a comprehensive curriculum, 15-week schedule, hands-on simulation labs (DC Servo Positioning System), extensible MDX lecture notes, assessment grading schemes, recommended textbooks, and instructional staff details.

---

## 🌟 Key Features

* **Complete Syllabus & Schedule (`/syllabus`):**
  * 15-week detailed topic breakdown with dates, core concepts, and project milestones.
  * Direct jump anchor for Week 1 (`#week-1`).
  * Download link for official PDF syllabus (`/syllabus.pdf`).
  * Interactive prerequisites self-check matrix.

* **Simulation Labs & Term Project (`/labs`, `/labs/[slug]`):**
  * 15 lab modules structured into 4 logical units (*Modeling*, *Response*, *Stability & Design*, *Project*).
  * Dynamic static site generation (SSG) powered by MDX (`dynamicParams = false`).
  * Rich MDX components: custom callout banners (`Callout`, `Tip`, `Note`, `Warning`, `InfoCallout`), themed code blocks, and data tables.
  * Graceful fallback state ("Materials Coming Soon") for upcoming lab modules.
  * Featured Mini Design Project showcase with deliverable milestones and rubrics.

* **Extensible Lecture Content (`/lectures`, `/lectures/[slug]`):**
  * Automatic filesystem reader (`src/lib/lectures.ts`) utilizing `gray-matter` / `remark-frontmatter`.
  * Zero-code content expansion: dropping a `.mdx` file into `src/content/lectures/` automatically generates its static route and lists it on the index page.

* **Course Resources & Tools (`/resources`):**
  * Categorized textbooks (e.g. Ogata, Nise, Dorf & Bishop) and simulation toolkits (Python Control Systems Library, MATLAB/Simulink).
  * Secure external links (`target="_blank" rel="noopener noreferrer"`).

* **Teaching Staff & Office Hours (`/staff`):**
  * Role-based cards for Instructor, Head TA, Lab TA, and Lab Specialist without placeholders or fake names.

* **Assessments & Policy Guide (`/assessments`):**
  * Exact percentage breakdown (Midterm Exam 30%, Final Exam 30%, Mini Project 30%, Lab Reports 10%).
  * Term project milestone timeline, late submission policy penalties, and academic integrity/AI tool guidelines.

* **Course Philosophy & Benchmark Specs (`/about`):**
  * "Predict Then Simulate" educational methodology.
  * Appendix A benchmark specs: DC Servo Positioning System parameters ($R_a$, $L_a$, $K_t$, $K_b$, $J$, $b$).

---

## ⚙️ Architecture & Data Structure

```text
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # Hero, highlights, and quick access
│   │   ├── syllabus/           # Course syllabus & schedule
│   │   ├── labs/               # Lab index & dynamic [slug] pages
│   │   ├── lectures/           # Lecture index & dynamic [slug] pages
│   │   ├── resources/          # Resource directory
│   │   ├── staff/              # Teaching team & office hours
│   │   ├── assessments/        # Grading criteria & AI policy
│   │   └── about/              # Course philosophy & DC Servo specs
│   ├── components/             # UI and custom course components
│   │   ├── course/             # PageHeader, Section, Callout
│   │   ├── layout/             # Navbar, Footer, ThemeToggle
│   │   └── ui/                 # shadcn/ui components
│   ├── content/                # Single source of truth for MDX docs
│   │   ├── labs/               # Lab sheet MDX files
│   │   └── lectures/           # Lecture content MDX files with YAML frontmatter
│   ├── data/                   # Typed centralized data modules
│   │   ├── schedule.ts         # 15-week curriculum
│   │   ├── labs.ts             # 15 lab definitions
│   │   ├── outcomes.ts         # Course description & prerequisites
│   │   ├── assessments.ts      # Grading breakdown & milestones
│   │   └── resources.ts        # Recommended books & software tools
│   └── lib/                    # File utilities and lecture parser
├── mdx-components.tsx          # Root MDX component bindings
└── next.config.ts              # Next.js & MDX configuration
```

---

## 🚀 Adding New Lectures (Zero-Code Extensibility)

To publish a new lecture, simply create a new MDX file in `src/content/lectures/`:

**Example:** `src/content/lectures/week-2-transfer-functions.mdx`

```mdx
---
title: "Transfer Functions and Block Diagram Algebra"
week: 2
date: "Week 2"
description: "s-domain modeling, Laplace transforms, transfer function derivation, and block diagram reduction."
---

# Transfer Functions and Block Diagram Algebra

## 1. The Laplace Domain
Transfer functions express the ratio of the output Laplace transform to the input Laplace transform under zero initial conditions...
```

*The application automatically reads the frontmatter metadata, lists the lecture at `/lectures`, and statically generates `/lectures/week-2-transfer-functions` during build time!*

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React 19)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **UI Components:** [shadcn/ui](https://ui.shadcn.com/) & [Lucide Icons](https://lucide.dev/)
* **Content Pipeline:** `@next/mdx`, `rehype-pretty-code` (github-dark syntax highlighting), `remark-frontmatter`, `remark-mdx-frontmatter`

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Validate types and linting:**
   ```bash
   npx tsc --noEmit
   npm run lint
   ```

4. **Production Build:**
   ```bash
   npm run build
   npm start
   ```

---

## 📄 License & Attribution

Developed for the Control Systems Engineering curriculum. All rights reserved.
