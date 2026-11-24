# Freelance portfolio landing page

A single-page site for A2 Digi Growth, a freelance web design and marketing studio: static websites, Shopify stores, poster design, digital marketing, SEO and solar scheme applications. Plain HTML, CSS and a little JavaScript. No build step.

## Edit your details

Open `script.js` and change the `SITE` object at the top: owner name, city, WhatsApp number, email, Instagram handle and the prefilled WhatsApp message. The page fills those in everywhere.

Other things you may want to change:

- `index.html`: the About paragraph and the case study text.
- `assets/`: replace the two screenshots when you add new work. Keep roughly a 1280 x 889 size.
- The portrait block in About is a placeholder. Swap the `.portrait-placeholder` div for an `<img>` of yourself.

## Run it locally

```bash
node serve.js
```

Then open http://localhost:5173.

## Deploy

It is static, so any host works: GitHub Pages, Netlify, Cloudflare Pages or Vercel. Point the host at the repository root.
