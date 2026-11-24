// The picture in the page's opening blinks now and then: the picture marked {.blink} in index.md.
// Adapted from blink.html. The eye positions below are pixels of that picture (sappho.webp, 720 x 992), so they
// suit that picture only: another picture needs its own positions, or no .blink.
// Nothing moves without JavaScript, or when the reader has asked their device for less motion.
(() => {
  const img = document.querySelector('img.blink');
  if (!img || matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // ---- settings ----
  const MIN_PAUSE = 5000;    // shortest wait between blinks (ms)
  const MAX_PAUSE = 14000;   // longest wait between blinks (ms)
  const FIRST_BLINK = 2500;  // delay before the very first blink (ms)
  const CLOSE = 130, HOLD = 60, OPEN = 260;   // blink timing (ms)

  // ---- eye geometry, in pixels of the original 720 x 992 image ----
  // x0/x1: eye corners, y0/y1: their heights, up/down: bulge of the opening,
  // lid: skin above the eye that stretches, lash: lash band that travels
  const IMG_W = 720, IMG_H = 992;
  const EYES = [
    { x0: 268, x1: 361, y0: 362, y1: 357, up: 21, down: 14, lid: 24, lash: 4 },
    { x0: 445, x1: 523, y0: 346, y1: 343, up: 16, down: 19, lid: 17, lash: 4 },
  ];
  const PATCH = { x: 256, y: 300, w: 280, h: 92 }; // canvas covers only this region

  function start() {
    // the picture goes into a wrapper that carries the canvas laid over the eyes
    const wrap = document.createElement('div');
    wrap.className = 'blink-wrap';
    img.before(wrap);
    const cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    wrap.append(img, cv);
    const ctx = cv.getContext('2d');

    cv.width = PATCH.w; cv.height = PATCH.h;
    cv.style.left = (PATCH.x / IMG_W * 100) + '%';
    cv.style.top = (PATCH.y / IMG_H * 100) + '%';
    cv.style.width = (PATCH.w / IMG_W * 100) + '%';
    cv.style.height = (PATCH.h / IMG_H * 100) + '%';

    function draw(t) {               // t: 0 = open, 1 = closed
      ctx.clearRect(0, 0, PATCH.w, PATCH.h);
      if (t <= 0) return;
      const sx = img.naturalWidth / IMG_W, sy = img.naturalHeight / IMG_H;
      for (const e of EYES) for (let x = e.x0; x <= e.x1; x++) {
        const u = (x - e.x0) / (e.x1 - e.x0);
        const s = Math.sin(Math.PI * u);
        const yc = e.y0 + (e.y1 - e.y0) * u;
        const yU = yc - e.up * Math.pow(s, 0.8);     // upper lid edge
        const yL = yc + e.down * Math.pow(s, 0.9);   // lower lid edge
        const down = t * (yL - yU);                  // upper lid travel
        const dx = x - PATCH.x;
        // skin above the eye stretches down ...
        const top = yU - e.lid;
        ctx.drawImage(img, x * sx, top * sy, sx, (e.lid - e.lash) * sy,
                           dx, top - PATCH.y, 1, e.lid - e.lash + down);
        // ... carrying the painted lash line with it
        ctx.drawImage(img, x * sx, (yU - e.lash) * sy, sx, 2 * e.lash * sy,
                           dx, yU - e.lash + down - PATCH.y, 1, 2 * e.lash);
      }
    }

    const ease = p => p * p * (3 - 2 * p);
    function blink() {
      const begin = performance.now();
      (function frame(now) {
        const e = now - begin;
        if (e < CLOSE) draw(ease(e / CLOSE));
        else if (e < CLOSE + HOLD) draw(1);
        else if (e < CLOSE + HOLD + OPEN) draw(1 - ease((e - CLOSE - HOLD) / OPEN));
        else { draw(0); schedule(); return; }
        requestAnimationFrame(frame);
      })(begin);
    }
    function schedule(delay) {
      setTimeout(() => document.hidden ? schedule(1000) : blink(),
                 delay ?? MIN_PAUSE + Math.random() * (MAX_PAUSE - MIN_PAUSE));
    }

    schedule(FIRST_BLINK);
  }

  // only for the picture these eye positions belong to
  (img.complete ? Promise.resolve() : new Promise(r => img.addEventListener('load', r, { once: true })))
    .then(() => {
      if (Math.abs(img.naturalWidth / img.naturalHeight - IMG_W / IMG_H) < 0.01) start();
    });
})();
