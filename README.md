# Icebrothes

Official website project for **Icebrothes**, an Icelandic GTA crew built around friendship, identity, cars, themed events, and long-running inside jokes that became real lore.

The site is designed to feel dark, cinematic, clean, and premium while staying fully static and GitHub Pages friendly.

## Canonical docs

- [CREW_CONTEXT.md](CREW_CONTEXT.md)  
  Main canon, tone, visual identity, members, lore, and writing guidance.

- [SITE_REFERENCE.md](SITE_REFERENCE.md)  
  Practical site reference for current pages, detail slugs, asset folders, and maintenance notes.

- [AGENTS.md](AGENTS.md)  
  Repository editing rules for coding agents and contributors.

## Current site scope

The website currently covers:

- homepage / hero
- about Icebrothes
- member cards and detail pages
- crew identity pages for outfit, crew car, and logo history
- Kristján Air sub-brand page
- event archive with detail pages and galleries
- meetings archive and printable meeting minutes templates
- general gallery / random images
- footer with contact and channel information

## Core facts

- Correct name: **Icebrothes**
- Founded: **27 March 2015**
- Base identity: **Akureyri, Iceland**
- Motto: **More Test – More Breast**
- Members: **7**

## Tech

- HTML
- CSS
- JavaScript

No frameworks. No build step. No heavy dependencies.

## Publishing

The project is intended for **GitHub Pages**.

It now includes:

- favicon support
- `apple-touch-icon` support for iPhone/iPad home screen
- `site.webmanifest` for installable web app metadata
- lightweight cache-busting via shared asset version tags in `index.html` and `detail.html`

## Meetings workflow

- Raw meeting template: `Meetings/IcebrothesFundagerd_Template.txt`
- New raw meeting files: `Meetings/Fundagerðir/YYYY-MM-DD.txt`
- Finished site pages: `fundargerd-*.html`

When a new `.txt` file is added under `Meetings/Fundagerðir/`, it should be turned into a matching HTML minutes page and linked from `fundir.html`.

## Non-negotiables

- Never rename **Icebrothes** to **Ice Brothers**
- Preserve Icelandic identity and established lore
- Keep the visual style dark, bold, cinematic, and premium
- Prefer clean semantic HTML and lightweight JavaScript
