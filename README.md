# A2 Digi Growth landing page

Single-page site for A2 Digi Growth, a freelance web design and marketing studio: static websites, Shopify stores, poster design, digital marketing, SEO and solar scheme applications.

Stack: Vite, React 18, TypeScript, Tailwind CSS v4, Framer Motion.

## Edit your details

Open `src/site.ts` and change the `site` object: owner name, city, WhatsApp number, email, Instagram handle and the prefilled WhatsApp message. The page reads those everywhere. The same file holds the case studies, services, process steps and ticker words.

Other things you may want to change:

- `public/assets/`: replace the screenshots when you add new work. `*-full.jpg` are tall page captures used for the hover-scroll effect, `*.jpg` are the hero crops.
- The "A2" portrait block in `src/components/About.tsx` is a placeholder. Swap it for an `<img>` of yourself.

## Run it locally

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:5173.

## Build and deploy

```bash
npm run build
```

The static output lands in `dist/`. Any static host works: GitHub Pages, Netlify, Cloudflare Pages or Vercel. Point the host at the repo with build command `npm run build` and output directory `dist`.
