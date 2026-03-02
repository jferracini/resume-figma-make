# resume-figma-make

Figma Make Resume example — CV/curriculum vitae built with React, Vite, and Tailwind CSS.

## About

This project is a code bundle generated from [Figma Make](https://www.figma.com/design/Wq6y8UoTugBLtXX5mbUQc6/Web-Curriculum-Builder). It showcases a responsive resume layout with dark mode support.

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Install & Run

```bash
# Install dependencies
pnpm install
# or: npm install

# Start development server
pnpm dev
# or: npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
pnpm build
# or: npm run build
```

Output is generated in the `dist/` folder.

## Project Structure

- `src/app/` — React components and app logic
- `src/app/data/cv-data.ts` — Edit your CV content here
- `public/assets/` — Logo images (company/school logos)

## Customization

Edit `src/app/data/cv-data.ts` to update your personal info, experience, education, and skills. Place logo images in `public/assets/` and reference them as `/assets/filename.png`.

## License

Apache-2.0
