# Kana Free

App to practice **hiragana** and **katakana**: a Japanese character appears and you type its sound in romaji.

No login and no saved progress — everything runs in the browser.

## Features

- Choose hiragana, katakana, or both
- Option to repeat or skip characters you already got right in the session
- Interactive charts with romaji on hover
- Accent columns (dakuten/handakuten) that expand on mouse over

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run build   # production build
npm run start   # run the local production build
npm run lint    # ESLint
```

## Docker

The container starts the app automatically on port 3000:

```bash
docker compose up --build -d
```

Open [http://localhost:3000](http://localhost:3000).

To stop:

```bash
docker compose down
```

## Stack

- [Next.js](https://nextjs.org) 16
- React 19
- TypeScript
- Tailwind CSS 4
