# Andromeda Data Group website

A responsive, multi-page static website for Andromeda Data Group LLC.

## Included pages
- Home
- Services
- Andromeda Board
- About
- Contact
- Thank-you page

## What works now
- Responsive desktop/mobile navigation
- Full campaign-services content
- Interactive Andromeda Board scenario planner
- Netlify-compatible contact form
- SEO titles/descriptions
- No build step and no JavaScript framework required

## Run locally
Open `index.html` in a browser, or run a simple local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Best deployment option: Netlify
1. Create a free Netlify account.
2. Drag the entire folder into Netlify Deploys, or connect a GitHub repository.
3. Netlify will publish the static site.
4. Add your custom domain `andromedadg.com`.
5. Update your DNS records using the instructions Netlify provides.
6. Because the contact form includes `data-netlify="true"`, submissions can appear in Netlify Forms after deployment.

## Alternative deployment
- GitHub Pages
- Cloudflare Pages
- Vercel
- Any normal web host

## Important before launch
- Replace or expand the About page with the founder bio you want public.
- Add your preferred business email.
- Add your scheduling link to the “Book a strategy call” buttons if you use Calendly or another scheduler.
- Add Privacy Policy and Terms pages before collecting or processing sensitive campaign data.
- Do not connect real voter data to the public Board demo.

## Andromeda Board production roadmap
The Board page in this package is a front-end demonstration. A real campaign platform should be a separate authenticated application with:
- user accounts and role-based access
- encrypted database/storage
- secure data import
- campaign-level tenant separation
- audit logging
- model execution pipelines
- dashboard APIs
- data-retention controls
- backups and incident response
- privacy/security review before using voter or client data

A practical stack for a production version:
- Front end: Next.js / React
- API: FastAPI (Python)
- Database: PostgreSQL
- Object storage: AWS S3 or equivalent
- Authentication: Auth0 / Clerk / managed identity provider
- Models: Python / scikit-learn / Hugging Face
- Deployment: Vercel + AWS/Render/Fly.io, or a fully AWS-based setup


## GitHub Pages deployment

1. Create a new GitHub repository named `andromeda-website`.
2. Keep the repository **Public** if you want to use GitHub Pages on the free plan.
3. Upload every file from this folder into the root of the repository.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. Save.
7. GitHub will publish the site at a `github.io` address.
8. To use `andromedadg.com`, enter the domain under **Custom domain** in the Pages settings.
9. Then update the domain DNS records at your registrar using GitHub's custom-domain instructions.

### Important GitHub Pages note
The included Netlify contact form will not process submissions on GitHub Pages because GitHub Pages is static hosting. For the contact form, use one of:
- Formspree
- Basin
- Getform
- a custom API endpoint
- or deploy the same GitHub repository to Netlify instead.

GitHub can still be your source-control home even if Netlify handles production hosting.


## Contact form setup in this version

The contact form now submits through **FormSubmit** to:

`Daniel.Bazargun@Andromedadg.com`

Important: the first time the form is submitted after deployment, FormSubmit will send an activation/confirmation email to that address. Confirm it once, and future form submissions will be delivered there.

The form redirects to:
`https://andromedadg.com/thanks.html`

If you are testing on the temporary GitHub Pages URL before connecting the custom domain, the form submission will still email you, but the thank-you redirect may work best after `andromedadg.com` is live.
