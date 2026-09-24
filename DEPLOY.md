# MoneyMate — Deployment Guide

## Vercel (recommended)
1. Create a free account at Vercel.
2. Create a new project and import this folder/repository.
3. Framework preset: **Other**.
4. Build command: leave empty.
5. Output directory: `.`.
6. Deploy.

Because this is a static site, no build step is required. `index.html` is the entry point.

## Netlify
Drag the project folder into Netlify's deploy area, or connect the Git repository. Publish directory: `.`.

## Local test
Run:
`python3 -m http.server 3000`

Then open:
`http://localhost:3000`

## Production note
The current calculator and dashboard are frontend demo functionality. For real users, add authentication, a backend/database, server-side validation, secure financial-data integrations, and privacy/security controls before collecting sensitive financial information.
