# 📘 Docs Portal – Multi-Language Documentation Platform

A high-performance, multi-language documentation portal built with **Next.js**, featuring **Incremental Static Regeneration (ISR)**, **internationalization**, **versioned documentation**, **full-text search**, **API reference using Swagger UI**, **dark/light theme**, and **Dockerized deployment**.

This project demonstrates modern documentation architecture commonly used in real-world product documentation and knowledge bases.

---

## 🚀 Features

- 📄 **Markdown-based documentation system**
- 🔁 **Incremental Static Regeneration (ISR)** with 60-second revalidation
- 🌍 **Internationalization (i18n)**
  - English (en)
  - Spanish (es)
  - French (fr)
  - German (de)
- 🔀 **Versioned documentation** (v1, v2, v3)
- 🔍 **Client-side full-text search**
- 📑 **Auto-generated Table of Contents (TOC)** with active section tracking
- 📘 **API Reference** rendered using Swagger UI
- 🌙 **Light / Dark theme toggle**
- 💬 **Feedback widget** on each documentation page
- 🐳 **Fully containerized** using Docker & Docker Compose

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + CSS Variables
- **Markdown Processing:** remark, remark-html, remark-slug
- **Search:** FlexSearch
- **API Docs:** swagger-ui-react
- **Containerization:** Docker, Docker Compose

---

## 📂 Project Structure

```
.
├── app/
│   ├── page.tsx
│   │   # Home page (Welcome screen + version selection)
│   │
│   ├── layout.tsx
│   │   # Root layout (Header, Theme provider)
│   │
│   ├── api-reference/
│   │   └── page.tsx
│   │       # Swagger UI API documentation page
│   │
│   └── [lang]/
│       └── docs/
│           ├── layout.tsx
│           │   # Docs layout (Sidebar + TOC wrapper)
│           │
│           └── [version]/
│               └── [slug]/
│                   └── page.tsx
│                       # Markdown documentation renderer
│                       # ISR enabled (revalidate: 60)
│
├── components/
│   ├── Header.tsx
│   │   # App header (Search, Version selector, Language switcher, Theme toggle)
│   │
│   ├── Sidebar.tsx
│   │   # Docs navigation sidebar
│   │
│   ├── VersionSelector.tsx
│   │   # Version switcher (v1, v2, v3)
│   │
│   ├── LanguageSwitcher.tsx
│   │   # Language switcher (en, es, fr, de)
│   │
│   ├── Search.tsx
│   │   # Client-side full-text search
│   │
│   ├── TableOfContents.tsx
│   │   # Auto-generated TOC with active section tracking
│   │
│   ├── ThemeToggle.tsx
│   │   # Dark / Light mode toggle
│   │
│   └── FeedbackWidget.tsx
│       # Feedback form shown on every docs page
│
├── _docs/
│   ├── en/
│   │   ├── v1/
│   │   │   └── introduction.md
│   │   ├── v2/
│   │   │   └── introduction.md
│   │   └── v3/
│   │       └── introduction.md
│   │
│   ├── es/
│   │   └── v1/
│   │       └── introduction.md
│   │
│   ├── fr/
│   │   └── v1/
│   │       └── introduction.md
│   │
│   └── de/
│       └── v1/
│           └── introduction.md
│
├── public/
│   ├── openapi.json
│   │   # OpenAPI spec used by Swagger UI
│   │
│   └── locales/
│       ├── en.json
│       ├── es.json
│       ├── fr.json
│       └── de.json
│
├── docker-compose.yml
│   # Docker Compose configuration (app service + healthcheck)
│
├── Dockerfile
│   # Multi-stage Docker build for Next.js
│
├── .env.example
│   # Environment variable documentation
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
│
└── README.md
---

## 🧪 Environment Variables

All required environment variables are documented in **`.env.example`**.

Example:

```env
# Application environment
NODE_ENV=development

# Next.js public variables
NEXT_PUBLIC_SITE_NAME=Docs Portal
```


---

## 🐳 Docker Setup (Required)

The application is fully containerized and can be started using Docker Compose.

### 🔧 Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### ▶️ Run the Application

From the project root:

```bash
docker-compose up --build
```

The application will be available at:

```
http://localhost:3000
```

A Docker health check ensures the app is responsive before the container is marked as healthy.

---

## 🔍 API Reference

The API documentation is available at:

```
/api-reference
```

It is rendered using **Swagger UI** from the OpenAPI specification located at:

```
public/openapi.json
```

---

## 🌍 Internationalized Routes

Examples:

- `/en/docs/v1/introduction`
- `/es/docs/v2/introduction`
- `/fr/docs/v3/introduction`
- `/de/docs/v1/introduction`

Language and version can be switched using the UI controls.

---

## 📑 Incremental Static Regeneration (ISR)

- All documentation pages are **statically generated**
- Pages are **revalidated every 60 seconds**
- Ensures **fast performance** with **fresh content**

---

## 💬 Feedback Widget

Each documentation page includes a feedback form where users can submit feedback.  
No backend is required; submission confirmation is handled client-side.

---

## 📦 Installation & Development

If you want to run the project locally without Docker:

### 1. Clone the repository

```bash
git clone <https://github.com/sailajabevara/Multi-Language-Documentation-Platform.git>
cd docs-portal
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```
---