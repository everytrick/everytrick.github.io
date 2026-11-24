#!/bin/sh
# Makes the site in _site/ from index.md and template.html. Needs Pandoc (https://pandoc.org).
# The workflow in .github/workflows/pages.yml runs this on every change to main and publishes _site/.
set -e
cd "$(dirname "$0")"
rm -rf _site
mkdir -p _site
pandoc index.md --from markdown --to html5 --standalone --template template.html --output _site/index.html
cp -R fonts sappho.webp blink.js _site/
