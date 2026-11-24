# everytrick.org

The home page of [everytrickinthebook](https://github.com/everytrick/everytrickinthebook), everytrick for short.

## Changing the text

The whole text is in [`index.md`](index.md). To change it on GitHub: open `index.md`, click the pencil, edit,
and click "Commit changes". The site is rebuilt and published about a minute later; the Actions tab shows its
progress, and a red cross there means something went wrong.

It is Pandoc Markdown, written like the pages of *Hear Here: Spatial Practices*:

- `## Heading` starts a section; `*italic*`, `[a link](https://…)`, `- ` starts a list item.
- A block between `::: {.name}` and `:::` gets a look of its own from the template: `.opening` (the name, the
  tagline and the picture), `.contact` (the box), `.site-footer` (the footer).
- The picture is `![caption](sappho.webp){.blink alt="what the picture shows"}`; the caption is shown under it, the
  alt text is read to people who cannot see it. `.blink` makes it blink now and then (see "The blinking picture").
- `title` and `description` at the top are the page's title in the browser tab and its summary for search engines
  and link previews.

## The design

[`template.html`](template.html) holds the design: the colours and type of everytrick's own default style, in
light and dark. Pandoc puts the text of `index.md` where `$body$` stands.

## The blinking picture

The woman in the opening blinks every now and then. [`blink.js`](blink.js) does it, to the picture whose line in
`index.md` carries `.blink`; the picture itself is the plain `sappho.webp`. Nothing moves without JavaScript, or when
the reader has asked their device for less motion.

The eye positions in `blink.js` belong to this picture (`sappho.webp`, 720 × 992 pixels). If you change the picture,
take `.blink` off its line, or give `blink.js` the new picture's eye positions; the script does nothing if the
picture's proportions are different.

## Building it on your own computer

With [Pandoc](https://pandoc.org) installed, run `./build.sh`, then open `_site/index.html`.

Once everytrick's code has moved to its own home, everytrick will build this site too.

## Licences

The text and the template: CC BY-SA 4.0, Studio Julien McHardy (SJMcH). Roboto, in `fonts/`: SIL Open Font
License 1.1 (`fonts/LICENSE-Roboto.txt`). The picture: a public-domain photograph of a wall painting from Pompeii,
from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pompei_-_Sappho_-_MAN.jpg).
