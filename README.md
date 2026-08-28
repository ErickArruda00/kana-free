# Kana Free

Web app for practicing **hiragana** and **katakana**: a Japanese character appears and you type its sound in romaji.

No account, no saved progress — everything runs in the browser.

---

## Features

- Practice hiragana, katakana, or both in the same session
- Option to repeat or skip characters you already got right
- Instant feedback with the correct answer on mistakes
- Score counter during the session
- Interactive charts with romaji on hover / focus
- Accent columns (dakuten / handakuten) that expand on hover
- UI in English and Portuguese (Brazil)

---

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- npm (bundled with Node.js)

For Docker: [Docker](https://www.docker.com/) and Docker Compose.

---

## Getting started

### Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## Docker

Multi-stage image with a Next.js standalone build. The container serves the app on port **3000**:

```bash
docker compose up --build -d
```

Open [http://localhost:3000](http://localhost:3000).

To stop:

```bash
docker compose down
```

---

## Stack

| Technology | Role |
| --- | --- |
| [Next.js](https://nextjs.org/) 16 | React framework (App Router) |
| [React](https://react.dev/) 19 | UI |
| [TypeScript](https://www.typescriptlang.org/) | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Styling |
| Docker | Container deployment |

---

## Project structure

```
app/                 # Routes and layout (Next.js App Router)
components/          # Practice UI and kana charts
data/                # Kana data, charts, and i18n
public/              # Static assets
Dockerfile           # Multi-stage build (standalone)
docker-compose.yml   # Local orchestration
```
