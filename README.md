# Khumoetsile Holdings — Website

A 4-page marketing website for Khumoetsile Holdings, built with React, TypeScript, Vite, Tailwind CSS,
React Router, Framer Motion, React Hook Form and Zod.

Pages: **Home**, **About Us**, **Products & Services**, **Contact Us / Request a Quote**.

---

## 1. Getting started

Requires [Node.js](https://nodejs.org) 18 or later.

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

The production build is output to `dist/`.

---

## 2. Project structure

```
khumoetsile-holdings/
├── public/
│   ├── images/          # logo + favicon assets (extracted from supplied logo file)
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects       # Netlify SPA routing
├── src/
│   ├── components/      # Header, Footer, WhatsAppButton, QuoteForm, cards, etc.
│   ├── data/content.ts  # All business copy, categories & contact details in one place
│   ├── lib/useSeo.ts    # Lightweight per-page <title>/meta hook (no extra dependency)
│   ├── pages/           # Home, About, Products, Contact, NotFound
│   ├── App.tsx           # Routes + shared layout
│   └── main.tsx
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── vercel.json           # SPA rewrite rule for Vercel
```

To update contact details, categories, or copy, edit `src/data/content.ts` — it feeds the whole site.

---

## 3. Deployment

### Vercel
1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Import the repository in Vercel — it auto-detects Vite (`npm run build`, output `dist`).
3. `vercel.json` is already included so all routes fall back to `index.html` (required for React Router).

### Netlify
1. Push to a Git repository and "Add new site" in Netlify, or run `netlify deploy` with the Netlify CLI.
2. Build command: `npm run build`. Publish directory: `dist`.
3. `public/_redirects` is already included for SPA routing.

### Cloudflare Pages
1. Connect the repository.
2. Build command: `npm run build`. Build output directory: `dist`.
3. Add a Pages redirect rule (or a `_redirects` file, already included) so all paths serve `index.html`.

### GitHub Pages
GitHub Pages doesn't natively support client-side routing rewrites. Either:
- Deploy under a custom domain with a catch-all `404.html` that redirects to `index.html`, or
- Switch `BrowserRouter` to `HashRouter` in `src/main.tsx` for GitHub Pages compatibility.

---

## 4. Environment variables

The site currently has **no required environment variables** — it's a static front-end.

If you connect a form backend (see below), you'll typically add something like:

```
VITE_FORM_ENDPOINT=https://your-form-handler.example.com/submit
```

and reference `import.meta.env.VITE_FORM_ENDPOINT` in `src/components/QuoteForm.tsx`.

---

## 5. Form integration notes (important)

The **Request a Quote** form on the Contact page is fully built and validated with React Hook Form + Zod
(required fields, email/phone format checks, consent checkbox). However, **no email-sending backend or
service is connected yet.**

On submit, the form currently opens the visitor's email app with a pre-filled message addressed to
`mmatshepo@khumoetsileholdings.co.za` (a `mailto:` link) — this works with no setup, but relies on the
visitor having an email client configured, and isn't ideal on all mobile devices.

To send submissions directly (recommended before launch), connect a form backend, e.g.:

- **Formspree** ([formspree.io](https://formspree.io)) — simplest, free tier available.
- **Netlify Forms** — if hosting on Netlify, add `data-netlify="true"` to the form and a hidden `form-name` field.
- **EmailJS**, or a custom serverless function (Vercel/Cloudflare Functions) that emails the submission.

Once you've chosen a provider, update the `onSubmit` handler in `src/components/QuoteForm.tsx` to `fetch()`
your endpoint instead of (or alongside) the `mailto:` fallback, and update the success message accordingly.

---

## 6. Domain connection guidance (after client approval)

The intended live domain is **www.khumoetsileholdings.co.za**. Do not connect or change DNS until the
client has reviewed and approved the built site on its temporary hosting URL (e.g. `*.vercel.app` or
`*.netlify.app`).

Once approved:
1. Add the custom domain in your hosting provider's dashboard (Vercel/Netlify/Cloudflare Pages).
2. Update the domain registrar's DNS records as instructed by the provider (typically a CNAME for `www`
   and an A/ALIAS record for the apex domain).
3. Enable HTTPS/SSL (automatic on Vercel, Netlify and Cloudflare Pages).
4. Re-check `index.html`, `public/sitemap.xml` and `public/robots.txt` — they already reference
   `https://www.khumoetsileholdings.co.za`, so no changes should be needed if the final domain matches.

---

## 7. Content accuracy

All copy is sourced from the material supplied for this project (logo, flyers, company profile). No
certifications, B-BBEE level, registration numbers, testimonials, pricing, delivery guarantees, staff
numbers, years of experience, or social media accounts have been invented — update `src/data/content.ts`
and the relevant page files as that information becomes available.
