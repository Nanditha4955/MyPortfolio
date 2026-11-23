# Nanditha M — Developer Portfolio

[![Deploy React Portfolio to GitHub Pages](https://github.com/Nanditha4955/MyPortfolio/actions/workflows/static.yml/badge.svg)](https://github.com/Nanditha4955/MyPortfolio/actions/workflows/static.yml)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=flat&logo=vercel&logoColor=white)](https://vercel.com/)

A sleek, responsive, and performance-focused personal portfolio website built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🚀 Live Demos

- **Live Site (GitHub Pages):** [https://nanditha4955.github.io/MyPortfolio/](https://nanditha4955.github.io/MyPortfolio/)
- **Featured Project (Expense Tracker):** [https://expense-tracker-one-beta-44.vercel.app](https://expense-tracker-one-beta-44.vercel.app)
- **Deploy to Vercel:** [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Nanditha4955/MyPortfolio)

---

## ✨ Features

- **Modern Minimalist Aesthetic:** Deep obsidian/true-black background palette with crisp emerald and zinc accents.
- **Responsive Across Devices:** Mobile-first layout with smooth navigation drawer and flexible desktop views.
- **Curated Sections:**
  - **Hero:** Catchy introduction, key metrics (Shipped Projects, B.Tech CGPA, Class of 2026), and direct action links.
  - **About Me:** Academic background from Mangalam College of Engineering (B.Tech in CS with Minor in Robotics).
  - **Experience & Internships:** Hands-on industry background at INDBIN CRM Fintech Services, Teklearn (UI/UX with AI), and NEST Cyber Campus (Python).
  - **Technical Skills:** Categorized competencies across Frontend, Backend & APIs, Databases, Programming Languages, and Dev Tools.
  - **Projects Showcase:** Filterable tabs dividing **Personal Projects** (with GitHub repo & live Vercel links) and **Academic Projects**.
  - **Certifications:** Verified credentials from Infosys Springboard (MERN), AWS (Cloud Practitioner & Prompt Engineering), and NPTEL.
  - **Download Resume:** Direct offline PDF download trigger (`Nanditha_M_Resume.pdf`) and in-browser preview option.
  - **Direct Contact:** Client-side email composition form using secure native `mailto:`, avoiding paid third-party dependencies.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Bundler & Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Design System:** Responsive CSS3, PostCSS, Autoprefixer
- **Deployment & CI/CD:** GitHub Actions & Vercel

---

## 📁 Project Structure

```text
MyPortfolio/
├── .github/
│   └── workflows/
│       └── static.yml         # GitHub Actions automated Pages deployment
├── public/
│   ├── Nanditha_M_Resume.pdf  # Downloadable PDF resume
│   └── profile.jpg            # Profile asset
├── src/
│   ├── App.jsx                # Core portfolio application component
│   ├── index.css              # Global styles & Tailwind directives
│   └── main.jsx               # React DOM entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind theme & color setup
├── vercel.json                # Vercel SPA build & rewrite configuration
├── vite.config.js             # Vite configuration with dynamic base path
├── CHANGELOG.md               # Project change history
└── README.md                  # Project documentation
```

---

## 💻 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Nanditha4955/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 Deployment

This project is configured to deploy automatically to **both GitHub Pages and Vercel** without any build conflicts.

### 1. GitHub Pages (Automated via GitHub Actions)
The repository includes a pre-configured GitHub Actions workflow (`.github/workflows/static.yml`):
1. In your GitHub repository, navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Every push to the `main` branch automatically builds and updates the live site at:  
   👉 **[https://nanditha4955.github.io/MyPortfolio/](https://nanditha4955.github.io/MyPortfolio/)**

### 2. Vercel (One-Click Deployment)
The repository includes `vercel.json` with pre-configured single-page application (SPA) routing:
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Select and import the `MyPortfolio` repository.
3. Click **Deploy**. Vite settings and output paths are detected automatically.

---

## 📬 Contact & Connect

- **Email:** [mnanditha186@gmail.com](mailto:mnanditha186@gmail.com)
- **LinkedIn:** [linkedin.com/in/Nanditha2004](https://linkedin.com/in/Nanditha2004)
- **GitHub:** [github.com/Nanditha4955](https://github.com/Nanditha4955)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
