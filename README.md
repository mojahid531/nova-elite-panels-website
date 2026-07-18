# NOVA Elite Panels LLC Website

This package contains the complete NOVA Elite Panels product-showcase website. It is a static React and Vite project with all product and staging images stored locally, so it can be edited in **Visual Studio Code** and published through **GitHub Pages** without relying on the Manus image-storage service.

| Item | Details |
|---|---|
| Framework | React 19, Vite, TypeScript, Tailwind CSS |
| Website type | Static product catalog |
| Prices | Not displayed |
| Local command | `pnpm dev` |
| Production command | `pnpm build` |
| Build output | `dist/public` |
| Deployment | Automated GitHub Pages workflow included |

## Start Locally

Install **Node.js 22**, open this folder in VS Code, then run the following commands in **Terminal → New Terminal**:

```bash
corepack enable
pnpm install
pnpm dev
```

Open the local address shown in the terminal, usually `http://localhost:3000`.

## Publish

Follow **[DEPLOYMENT.md](./DEPLOYMENT.md)** for the complete GitHub, GitHub Pages, DNS, custom-domain, and HTTPS instructions.

> The project-request form prepares a prefilled email in the visitor’s email application. GitHub Pages cannot directly send email because it serves static files only. Direct background submission would require a form or email service.

