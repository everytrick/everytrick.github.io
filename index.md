---
title: everytrickinthebook
description: "everytrickinthebook, everytrick for short, by SJMcH, uses every trick in the book to turn a book written in Markdown into an open, static website."
---
::: {.opening}

::: {.intro}

everytrick[inthebook]{} {.name}

::: {.tagline}
by SJMcH
:::
:::

![A young woman with a stylus and wax tablets, the codex’s ancestor. Wall painting from Pompeii, before 79 CE. Public domain, [via Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pompei_-_Sappho_-_MAN.jpg).](sappho.webp){width=720 height=991 alt="Wall painting of a young woman with a golden net in her hair, holding a stylus to her lips and a set of wax tablets bound like a book."}

:::

everytrickinthebook, everytrick for short, deploys every trick in the book to create digital born books, that flow, wherever  people browse, read, collect, cite and archive.


Designed with the end in mind, it needs no server, is locked into no platform and the book can live on beyond the kit that builds it. Designed with scaling small in mind, it assembles open tools on a workbench where components can be swapped out, extended and replaced easily. No lockin. Interoperability. Directly accessible source files can be manipulated by humans with tools and agents of their own choosing. 

It builds on Pandoc, a few Lua filters, a template, 16 years of publishing experience and the shoulders of giants, dwarfs, gathered friends, allied infrastructures and cracks in the internet (a proper acknowledgment of the multitude shall follow). Pandoc reads the Markdown and writes the pages. Lua filters add what Markdown cannot say on its own, such as paragraph numbers, citations, pictures, margin notes and podcast players, and one HTML template gives every page the same design. Node.js scripts run the build and check that every link and file in the site is there. The image library sharp makes the resized photographs and the tiles for the zoom viewer, which is built on OpenSeadragon. Poppler, an open PDF tool, draws the pages of documents, and Pagefind makes the search index, which finds the text of documents as well as of essays. Roboto sets the type. Recordings are timed to their paragraphs with ffmpeg and whisper.cpp, on the kits own computer rather than in the cloud. The text stays as plain Markdown in Git, which also keeps the history that dates every change and holds the frozen versions as tags. GitHub Actions publishes the site on GitHub Pages, and each branch is previewed on Cloudflare Pages before it is merged.

everytrick is made by Studio Julien McHardy with and for Mattering Press. [*Hear Here: Spatial Practices*](https://hearhere.matteringpress.org/), Nirmal Puwar (Mattering Press, 2026–), is the first book made with everytrick, kit and book are growing up together.

For now everytrick’s code lives in that book’s repository, in the `everytrick/` folder. It will move to its own home, [github.com/everytrick](https://github.com/everytrick/everytrickinthebook).

[What’s new](https://github.com/mattering-press/Hear-Here-Spatial-Practices/blob/main/everytrick/CHANGELOG.md) lists every version of everytrick and what changed in it.

::: {.contact}

## Get in touch

I have big and humble plans for everytrick. If you make books, or kits for making them, and would like to use, try, contribute or think about everytrickinthebook write to

[mail@julienmchardy.info](mailto:mail@julienmchardy.info){.address}
:::

::: {.site-footer}
Copyright © 2026 Studio Julien McHardy (SJMcH).

Everytrickinthebook is under the Mozilla Public License 2.0; its Markdown conventions and documentation, this page included, under CC BY-SA 4.0; the designed styles, `sjmch/styles`, are free for non-commercial use. [The details](https://github.com/mattering-press/Hear-Here-Spatial-Practices/blob/main/everytrick/NOTICE.md). Please get in touch before sending changes.
:::
