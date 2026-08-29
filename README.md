# Andromeda Data Group website

A responsive, multi-page static website for Andromeda Data Group LLC.

## Pages

- Home
- Services
- Andromeda Hub
- About
- Contact
- Thank-you page

The former `board.html` URL redirects to `hub.html` so existing links continue to work.

## Brand system

- Warm white backgrounds and black typography
- Deep purple and amber/orange accents
- League Spartan display typography with DM Sans body copy
- Canva-supplied full Andromeda logo in `assets/andromeda-logo.png`
- Text-free navigation symbol in `assets/andromeda-mark.svg`
- Branded social preview in `assets/og-andromeda.png`

## Features

- Responsive desktop and mobile navigation
- Focused campaign-services content
- Detailed Andromeda Hub product explanation
- Interactive Hub scenario illustration
- FormSubmit-powered contact form
- Search and social-sharing metadata
- No build step or JavaScript framework required

## Run locally

Open `index.html` directly, or run a local server from this directory:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages

The repository is configured for the custom domain:

`andromedadg.com`

In GitHub, use **Settings → Pages** with:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

## Contact form

The contact form submits through FormSubmit to:

`Daniel.Bazargun@Andromedadg.com`

FormSubmit may send a one-time activation email the first time the form is submitted. The confirmation redirect is:

`https://andromedadg.com/thanks.html`

Do not use the public contact form to transmit voter files, credentials or sensitive campaign data.

## Andromeda Hub

The Hub shown on the public site is an illustrative front-end experience using fictional data. A production campaign workspace should be separately scoped with authentication, secure storage, campaign-level access controls, encrypted data transfer, audit logging, retention controls and a security/privacy review before handling real campaign data.
