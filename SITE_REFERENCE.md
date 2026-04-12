# SITE_REFERENCE.md

## Purpose

This file is the practical reference for the current Icebrothes website as implemented in the repository.

Use it when you need to know:

- what pages currently exist
- which detail slugs are live
- where major assets are stored
- which files to update when new content is added

## Main editable files

- `index.html`
- `detail.html`
- `style.css`
- `script.js`
- `detail.js`
- `site.webmanifest`

## Current page structure

### Homepage sections

The homepage currently includes:

- hero
- about Icebrothes
- members
- identity / búnaður
- Kristján Air
- events
- random gallery
- footer

### Detail page system

`detail.html` is a shared template.  
`detail.js` contains the content map keyed by `slug`.

Current detail slugs:

#### Identity

- `outfit`
- `crew-car`
- `logo-anniversary`
- `logo-og`

Note: the homepage currently links to the combined logo-history page via `logo-anniversary`. The `logo-og` detail page still exists as a legacy page.

#### Members

- `member-saevark`
- `member-kiddi`
- `member-pall`
- `member-fusi`
- `member-steve`
- `member-valur`
- `member-sleo`

#### Sub-brand

- `kristjan-air`

#### Events

- `event-11-year-anniversary`
- `event-mansion-kahoot`
- `event-halloween-horror-ride`
- `event-10-year-anniversary`
- `event-mount-gordo-bike-trip`
- `event-mount-chilliad-hike`
- `event-purple-gang-takeover`
- `event-valentines-competition`
- `event-new-year-2020`

## Major asset folders

### Logos

`Photos/Logos/`

Important files currently used:

- `Icebrothes_AnniversaryLogo_Orange.png`
- `Icebrothes_OG.png`
- `Icebrothes.FirstLogoPrototype.png`

### Crew outfit and crew car

`Photos/CrewCarandOutfit/`

Current structure:

- `Outfit/Outfit.png`
- `CrewCar/Icebrothes_Crew_Car_Main.png`
- `CrewCar/CrewCarAndOutfit1.png`
- `CrewCar/CrewCarAndOutfit.png`

### Member assets

`Photos/Members/`

Current notable files:

- `SævarK/SævarK_Profile.png`
- `SævarK/saevark_sultan.jpg`
- `Kristján/Kristjan_Profile.png.png`
- `Fúsi/Hagridopressor.jpg`
- `Fúsi/Oppressormk2.png`
- `Páll/Hydra_Páll.png`

### Kristján Air

`Photos/KristjánAir/`

Current notable files:

- `KristjánAirCover.png`
- `KristjanAirLogo.jpeg`
- `0_0.jpg`
- `IMG_4372.JPEG`

### Events

`Photos/Events/`

Current event folders:

- `Áramót 2020`
- `10Year-Annniv`
- `11Year-Anniv`
- `Fjallganga`
- `Kahoot`
- `Halloween event`
- `Mount Gordo Hjólaferð`
- `PurpleGangTakeOver`
- `Valentínusarkeppni Icebrothes`

### Extra

`Photos/Extra/`

Current notable files:

- `youtubeIcon.png`
- `Flag_of_Iceland.svg`
- `Seal_of_Akureyri.png`

## Content maintenance rules

When adding a new member, event, or identity page:

1. Add or update the card on `index.html` if it should be visible from the homepage.
2. Add the content entry in `detail.js`.
3. Add any required styling in `style.css`.
4. If the new content changes canon or crew reference material, update `CREW_CONTEXT.md`.
5. If the new content changes the implemented structure, update this file.

## Home screen / icon setup

The project now supports:

- favicon
- `apple-touch-icon`
- `site.webmanifest`

Relevant files:

- `index.html`
- `detail.html`
- `site.webmanifest`

The icon currently used for favicon and home screen support is:

- `Photos/Logos/Icebrothes_AnniversaryLogo_Orange.png`

## Cache-busting note

`index.html` and `detail.html` both include:

- `<meta name="asset-version" ...>`

That value is used to append a `?v=` query string to:

- favicon
- apple touch icon
- manifest
- stylesheet
- JavaScript files

When you want to force browsers to pull updated static assets, update the `asset-version` value in both HTML entry files.
