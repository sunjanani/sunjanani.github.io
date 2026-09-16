# Personal website

This is a plain HTML website. No installation or build step is needed.
Open `index.html` in a browser to preview it, then refresh after saving edits.

## Where to edit

```text
index.html                    All text, links, publications, and tabs
assets/
  css/
    main.css                  Layout, colors, and font sizes
    fonts/                    Font definitions (normally no edits needed)
  images/
    profile.jpg               Profile photo
  js/
    tabs.js                   Tab navigation and keyboard controls
```

The font definitions load fonts from the internet; offline previews use a
fallback font. The page content and tabs work locally.

## Edit the About section

Open `index.html` in a text editor and search for `<!-- ABOUT:`.
Edit the text inside that section's `<p>...</p>` paragraphs. To add another
paragraph, insert it before the section's closing `</div>`:

```html
<p>My new paragraph goes here.</p>
<p>Here is a <a href="https://example.com">link label</a>.</p>
```

Keep the surrounding tags. Use `&amp;` when writing an ampersand in text.
Update your affiliation and email in the profile at the top when those details change.

## Add a publication

Search for `<!-- PUBLICATIONS:` in `index.html`. Copy a complete
`<div class="paper">...</div>` block inside that section and replace its details.
Place new papers at the top of the list, after the Publications heading:

```html
<div class="paper">
    <p class="title"><b>Paper title</b></p>
    <p>with Coauthor One and Coauthor Two</p>
    <p>Conference 2027</p>
    <p><a href="https://example.com/paper">[Paper]</a></p>
</div>
```

Remove any paragraph you do not need, such as the coauthor line for a solo paper.

## Add a section or tab

1. Add a link inside `<nav class="section-tabs">`:
   ```html
   <a id="tab-teaching" href="#teaching">Teaching</a>
   ```
2. Add the matching panel after the Publications panel, inside `#content`:
   ```html
   <div id="teaching" class="tab-panel">
       <h4>Teaching</h4>
       <p>Details about my teaching.</p>
   </div>
   ```

Use a unique ID for each section. The link's `href` must match the panel's ID.
Keep the navigation links and panels in the same order; the script pairs them
by position. No JavaScript edits are needed to add a tab.

## Change the photo or appearance

- Replace `assets/images/profile.jpg` to change the photo. If you use a different
  filename, update the image's `src` in `index.html`.
- Search for `#name h1` in `assets/css/main.css` to change the name's font size.
  It is set to `3rem` (about 35 pixels).
- Other layout and color rules are in the same stylesheet, with the small-screen
  adjustments at the bottom.

## Check and publish changes

Preview `index.html`, click each tab, and check a narrow browser window as well
as a full-width one. Verify any new links and images.

Commit and push the edited files to the branch configured for GitHub Pages to
publish them. Include files added or moved under `assets/` in the same commit as
changes to `index.html` so its file paths stay valid.
