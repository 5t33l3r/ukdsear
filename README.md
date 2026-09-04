# UKDSEAR

Two offline apps for the Dangerous Substances and Explosive Atmospheres Regulations 2002.

- **UKDSEAR ENGINEER** — zone classification, equipment marking, the full text of HSE L138, equipment check records with Word and PDF export.
- **UKDSEAR USER** — for people who use equipment on site. Pick the zone, read the plate, find out whether the item is allowed in.

Both run entirely in the browser. No server, no database, no accounts, no tracking. Nothing typed into either app leaves the device.

## Putting it live

1. Create a repository on GitHub. A public one, because GitHub Pages needs a paid plan to serve from a private repository.
2. Upload everything in this folder, keeping the folder structure.
3. Go to **Settings**, then **Pages**.
4. Under **Build and deployment**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. Wait a minute or two. The address appears at the top of that page, in the form `https://YOURNAME.github.io/REPO/`.

## Installing on a phone

Open the address in Safari or Chrome, then:

- **iPhone**: Share, then Add to Home Screen.
- **Android**: menu, then Install app.

The app then opens full screen from the home screen and works with no signal.

## Publishing an update

Replace `engineer/index.html` or `user/index.html`, then change the version in the matching `sw.js`:

```
const CACHE = "ukdsear-engineer-v3.2";
```

Change that number every time. The phone only fetches a new copy when the cache name changes. Miss it and people keep the old app.

## Structure

```
index.html                 landing page linking both apps
engineer/index.html        the engineer app, one self contained file
engineer/manifest.webmanifest
engineer/sw.js             offline cache
engineer/icon-*.png
user/…                     the same for the site user app
```

## Protected copies

The same two apps, encrypted, sit at `/locked/`:

```
https://YOURNAME.github.io/REPO/locked/
```

They are not linked from the main landing page, so only someone given the address will go there. A password is needed each time they open, including once installed on a phone. Without it there is nothing readable in those pages.

The open apps at the top level are unaffected and still need no password.

## Authenticity

Both hosted apps carry the keyed fingerprint. A **Verify build** tab sits at the bottom left of every screen. Entering the author password confirms whether the app is exactly as published.

The fingerprint is computed over the published page, including its web app tags and worker registration, so the hosted copy verifies as served. If anyone downloads the page, alters it and passes it on, the check fails on their copy and they cannot repair it without the password.

If you edit `index.html` by hand the fingerprint no longer matches and the app reports itself as amended. Rebuild it rather than hand editing.

## Attribution

Contains public sector information published by the Health and Safety Executive and licensed under the Open Government Licence. Nothing in these apps implies HSE endorsement.
