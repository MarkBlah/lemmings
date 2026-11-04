// Each run of the script (a <script> tag, a bookmarklet click, or window.__walker.add()) adds one walker.
(() => {
  // always pass a fresh arrow: addEventListener ignores a second registration of the same function
  const ready = f => document.body ? f() : addEventListener('DOMContentLoaded', f, { once: true });
  if (window.__walker) return window.__walker.add();

  const CSS = ".sprite{display:inline-block;position:relative}\n.sprite::before{content:\"\";position:absolute;top:-1px;left:-1px;width:1px;height:1px;animation:var(--a) var(--d) step-end infinite}\n.s1{width:8px;height:10px;--a:s1;--d:560ms}\n@keyframes s1{0%{box-shadow:3px 2px #038f03,4px 2px #038f03,5px 2px #038f03,6px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #f3cfd3,4px 4px #f3cfd3,5px 4px #f3cfd3,6px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #0357d3,4px 6px #f3cfd3,5px 6px #0357d3,4px 7px #f3cfd3,5px 7px #0357d3,4px 8px #0357d3,5px 8px #0357d3,3px 9px #f3cfd3,4px 9px #0357d3,5px 9px #0357d3,4px 10px #f3cfd3,5px 10px #f3cfd3}12.5%{box-shadow:4px 1px #038f03,6px 1px #038f03,3px 2px #038f03,4px 2px #038f03,5px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #f3cfd3,4px 4px #f3cfd3,5px 4px #f3cfd3,6px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #0357d3,3px 6px #f3cfd3,4px 6px #0357d3,5px 6px #0357d3,3px 7px #f3cfd3,4px 7px #0357d3,5px 7px #0357d3,7px 7px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,7px 8px #f3cfd3,3px 9px #0357d3,4px 9px #0357d3,6px 9px #f3cfd3,3px 10px #f3cfd3,4px 10px #f3cfd3}25%{box-shadow:3px 2px #038f03,5px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #038f03,4px 4px #038f03,5px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #f3cfd3,6px 5px #f3cfd3,3px 6px #f3cfd3,4px 6px #f3cfd3,5px 6px #0357d3,3px 7px #f3cfd3,4px 7px #0357d3,5px 7px #0357d3,2px 8px #f3cfd3,3px 8px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,6px 8px #0357d3,3px 9px #0357d3,4px 9px #0357d3,5px 9px #0357d3,6px 9px #0357d3,2px 10px #f3cfd3,3px 10px #f3cfd3,6px 10px #f3cfd3,7px 10px #f3cfd3}37.5%{box-shadow:4px 2px #038f03,5px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #f3cfd3,6px 3px #038f03,3px 4px #038f03,4px 4px #f3cfd3,5px 4px #f3cfd3,6px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #0357d3,4px 6px #f3cfd3,5px 6px #0357d3,3px 7px #f3cfd3,4px 7px #0357d3,5px 7px #0357d3,4px 8px #0357d3,5px 8px #0357d3,2px 9px #f3cfd3,3px 9px #0357d3,4px 9px #0357d3,5px 9px #0357d3,6px 9px #0357d3,2px 10px #f3cfd3,5px 10px #f3cfd3,6px 10px #f3cfd3}50%{box-shadow:3px 2px #038f03,4px 2px #038f03,5px 2px #038f03,6px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #f3cfd3,3px 4px #038f03,4px 4px #f3cfd3,5px 4px #f3cfd3,6px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #0357d3,4px 6px #0357d3,5px 6px #f3cfd3,4px 7px #f3cfd3,5px 7px #0357d3,4px 8px #0357d3,5px 8px #0357d3,3px 9px #f3cfd3,4px 9px #0357d3,5px 9px #0357d3,4px 10px #f3cfd3,5px 10px #f3cfd3}62.5%{box-shadow:4px 1px #038f03,6px 1px #038f03,3px 2px #038f03,4px 2px #038f03,5px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #f3cfd3,4px 4px #f3cfd3,5px 4px #f3cfd3,6px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #0357d3,4px 6px #0357d3,5px 6px #f3cfd3,4px 7px #0357d3,5px 7px #f3cfd3,7px 7px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,7px 8px #f3cfd3,3px 9px #0357d3,4px 9px #0357d3,6px 9px #f3cfd3,3px 10px #f3cfd3,4px 10px #f3cfd3}75%{box-shadow:3px 2px #038f03,5px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #038f03,4px 4px #038f03,5px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #f3cfd3,6px 5px #f3cfd3,4px 6px #0357d3,5px 6px #f3cfd3,4px 7px #0357d3,5px 7px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,6px 8px #f3cfd3,3px 9px #0357d3,4px 9px #0357d3,5px 9px #0357d3,6px 9px #0357d3,2px 10px #f3cfd3,3px 10px #f3cfd3,6px 10px #f3cfd3,7px 10px #f3cfd3}87.5%{box-shadow:4px 2px #038f03,5px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #f3cfd3,6px 3px #038f03,3px 4px #038f03,4px 4px #f3cfd3,5px 4px #f3cfd3,6px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #0357d3,4px 6px #f3cfd3,5px 6px #0357d3,4px 7px #0357d3,5px 7px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,2px 9px #f3cfd3,3px 9px #0357d3,4px 9px #0357d3,5px 9px #0357d3,6px 9px #0357d3,2px 10px #f3cfd3,5px 10px #f3cfd3,6px 10px #f3cfd3}100%{box-shadow:4px 2px #038f03,5px 2px #038f03,3px 3px #038f03,4px 3px #038f03,5px 3px #f3cfd3,6px 3px #038f03,3px 4px #038f03,4px 4px #f3cfd3,5px 4px #f3cfd3,6px 4px #f3cfd3,4px 5px #f3cfd3,5px 5px #0357d3,4px 6px #f3cfd3,5px 6px #0357d3,4px 7px #0357d3,5px 7px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,2px 9px #f3cfd3,3px 9px #0357d3,4px 9px #0357d3,5px 9px #0357d3,6px 9px #0357d3,2px 10px #f3cfd3,5px 10px #f3cfd3,6px 10px #f3cfd3}}\n.s2{width:8px;height:10px;--a:s2;--d:280ms}\n@keyframes s2{0%{box-shadow:4px 1px #038f03,5px 1px #038f03,3px 2px #038f03,4px 2px #038f03,5px 2px #f3cfd3,3px 3px #038f03,4px 3px #f3cfd3,5px 3px #f3cfd3,6px 3px #f3cfd3,2px 4px #f3cfd3,4px 4px #0357d3,5px 4px #0357d3,7px 4px #f3cfd3,3px 5px #f3cfd3,4px 5px #0357d3,5px 5px #0357d3,6px 5px #f3cfd3,4px 6px #0357d3,5px 6px #0357d3,4px 7px #0357d3,5px 7px #0357d3,2px 8px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,6px 8px #f3cfd3,3px 9px #f3cfd3,4px 9px #0357d3,7px 9px #f3cfd3}25%{box-shadow:3px 1px #038f03,5px 1px #038f03,3px 2px #038f03,4px 2px #038f03,5px 2px #f3cfd3,4px 3px #f3cfd3,5px 3px #f3cfd3,6px 3px #f3cfd3,4px 4px #0357d3,5px 4px #0357d3,2px 5px #f3cfd3,3px 5px #f3cfd3,4px 5px #0357d3,5px 5px #0357d3,6px 5px #f3cfd3,7px 5px #f3cfd3,4px 6px #0357d3,5px 6px #0357d3,4px 7px #0357d3,5px 7px #0357d3,4px 8px #0357d3,5px 8px #0357d3,6px 8px #f3cfd3,7px 8px #f3cfd3,2px 9px #f3cfd3,3px 9px #f3cfd3,4px 9px #0357d3}50%{box-shadow:4px 1px #038f03,5px 1px #038f03,3px 2px #038f03,4px 2px #038f03,5px 2px #f3cfd3,3px 3px #038f03,4px 3px #f3cfd3,5px 3px #f3cfd3,6px 3px #f3cfd3,4px 4px #0357d3,5px 4px #0357d3,3px 5px #f3cfd3,4px 5px #0357d3,5px 5px #0357d3,6px 5px #f3cfd3,2px 6px #f3cfd3,4px 6px #0357d3,5px 6px #0357d3,7px 6px #f3cfd3,4px 7px #0357d3,5px 7px #0357d3,7px 7px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,6px 8px #f3cfd3,3px 9px #f3cfd3,4px 9px #0357d3,2px 10px #f3cfd3}75%{box-shadow:3px 1px #038f03,5px 1px #038f03,3px 2px #038f03,4px 2px #038f03,5px 2px #f3cfd3,3px 3px #038f03,4px 3px #f3cfd3,5px 3px #f3cfd3,6px 3px #f3cfd3,4px 4px #0357d3,5px 4px #0357d3,2px 5px #f3cfd3,3px 5px #f3cfd3,4px 5px #0357d3,5px 5px #0357d3,6px 5px #f3cfd3,7px 5px #f3cfd3,4px 6px #0357d3,5px 6px #0357d3,4px 7px #0357d3,5px 7px #0357d3,2px 8px #f3cfd3,3px 8px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,6px 8px #f3cfd3,7px 8px #f3cfd3,4px 9px #0357d3}100%{box-shadow:3px 1px #038f03,5px 1px #038f03,3px 2px #038f03,4px 2px #038f03,5px 2px #f3cfd3,3px 3px #038f03,4px 3px #f3cfd3,5px 3px #f3cfd3,6px 3px #f3cfd3,4px 4px #0357d3,5px 4px #0357d3,2px 5px #f3cfd3,3px 5px #f3cfd3,4px 5px #0357d3,5px 5px #0357d3,6px 5px #f3cfd3,7px 5px #f3cfd3,4px 6px #0357d3,5px 6px #0357d3,4px 7px #0357d3,5px 7px #0357d3,2px 8px #f3cfd3,3px 8px #f3cfd3,4px 8px #0357d3,5px 8px #0357d3,6px 8px #f3cfd3,7px 8px #f3cfd3,4px 9px #0357d3}}";
  const S = 4;           // screen px per sprite px
  const FRAME_MS = 70;   // one sprite frame, as in the sprite CSS
  const WALK = 1;        // px per frame: s1's planted foot slides back 1px each frame
  const MAX_STEP = 2;    // a ledge this high or lower is stepped up; higher is a wall
  const MAX_DROP = 3;    // a drop this deep or shallower is stepped down; deeper is a fall
  const BODY_L = 3, BODY_R = 2;   // s1/s2 pixels span fx-3..fx+2 (same when mirrored)
  const GRAVITY = 0.5;   // px per frame²
  const MAX_V = 12;      // px per frame: launch and fall speed cap
  const PAD_POWER = 0.2; // moving-surface launches reach this fraction of full height (speed scales by its square root)
  const SOLID_TAGS = new Set(['IMG', 'VIDEO', 'CANVAS', 'svg', 'INPUT', 'BUTTON', 'TEXTAREA', 'SELECT', 'IFRAME', 'HR']);

  // Shadow DOM + constructed stylesheet: page CSS can't reach the sprites, and CSP style-src doesn't block it.
  // The host is absolute at the document origin, so walkers scroll with the page natively.
  const host = document.createElement('div');
  host.style.cssText = 'position:absolute;left:0;top:0;width:0;height:0;z-index:2147483647';
  const root = host.attachShadow({ mode: 'open' });
  const sheet = new CSSStyleSheet();
  // Outline lives on an unscaled wrapper so its width is in screen px: 0.5px where that's a real device pixel, else 1px.
  const O = devicePixelRatio >= 2 ? 0.5 : 1, OC = '#999';
  sheet.replaceSync(CSS + `
.sprite{position:absolute;left:0;top:0;transform-origin:0 0;cursor:grab;touch-action:none;user-select:none}
.wrap{position:absolute;left:0;top:0}
.outline{filter:drop-shadow(${O}px 0 0 ${OC}) drop-shadow(-${O}px 0 0 ${OC}) drop-shadow(0 ${O}px 0 ${OC}) drop-shadow(0 -${O}px 0 ${OC})}`);
  root.adoptedStyleSheets = [sheet];

  // World = document px / S. Hard rects block and carry; floor rects (text) only carry, since
  // paragraph lines sit closer together than the sprite is tall.
  let rects = [], WW = 0;
  const walkers = [];
  const floorY = () => Math.floor((scrollY + document.documentElement.clientHeight) / S);   // bottom of the window
  const clampV = v => Math.max(-MAX_V, Math.min(MAX_V, v));
  const clampX = x => Math.min(Math.max(x, BODY_L), WW - 1 - BODY_R);   // keep the body on the page
  const transparent = c => c === 'transparent' || /,\s*0\)$|\/\s*0\)$/.test(c);

  function buildRects() {
    const sx = scrollX, sy = scrollY, vpArea = innerWidth * innerHeight, out = [];
    // src + part identify the same surface across rebuilds, so a walker can follow it when the page reflows
    const add = (src, part, l, t, r, b, floor) => {
      if (r > l && b > t) out.push({ src, part, x: Math.floor((l + sx) / S), y: Math.floor((t + sy) / S), x2: Math.ceil((r + sx) / S), y2: Math.ceil((b + sy) / S), floor });
    };
    // shortcut: fixed/sticky elements and overflow-clipped content are treated like normal content; skip them if they cause odd collisions.
    for (const n of document.body.querySelectorAll('*')) {
      const b = n.getBoundingClientRect();
      if (!b.width || !b.height) continue;
      const cs = getComputedStyle(n);
      if (cs.visibility !== 'visible' || cs.opacity === '0') continue;
      if (SOLID_TAGS.has(n.tagName)) { add(n, 'box', b.left, b.top, b.right, b.bottom); continue; }
      // shortcut: backgrounds over half the viewport are skipped as page wrappers, not visible boxes.
      if ((!transparent(cs.backgroundColor) || cs.backgroundImage !== 'none') && b.width * b.height < vpArea / 2) {
        add(n, 'box', b.left, b.top, b.right, b.bottom); continue;
      }
      const bw = side => {
        const st = cs[`border${side}Style`];
        return st !== 'none' && st !== 'hidden' && !transparent(cs[`border${side}Color`]) ? parseFloat(cs[`border${side}Width`]) : 0;
      };
      const t = bw('Top'), r = bw('Right'), bo = bw('Bottom'), l = bw('Left');
      if (t) add(n, 't', b.left, b.top, b.right, b.top + t);
      if (bo) add(n, 'b', b.left, b.bottom - bo, b.right, b.bottom);
      if (l) add(n, 'l', b.left, b.top, b.left + l, b.bottom);
      if (r) add(n, 'r', b.right - r, b.top, b.right, b.bottom);
    }
    const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: t => /\S/.test(t.data) && !/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/.test(t.parentElement?.tagName)
        ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP,
    });
    const range = document.createRange();
    for (let t; (t = tw.nextNode());) {
      range.selectNodeContents(t);
      let line = 0;
      for (const q of range.getClientRects()) add(t, line++, q.left, q.top, q.right, q.bottom, true);
    }
    rects = out;
    WW = Math.ceil(document.documentElement.scrollWidth / S);
  }

  // Page sides and the window-bottom floor are hard, so walkers can never leave.
  const hit = (px, py, floorToo) =>
    rects.find(r => (floorToo || !r.floor) && px >= r.x && px < r.x2 && py >= r.y && py < r.y2);
  const solid = (px, py, floorToo) => px < 0 || px >= WW || py >= floorY() || !!hit(px, py, floorToo);
  const ground = (px, py) => solid(px, py, true);

  function launch(w, vx, vy) {
    w.state = 'air';
    w.vx = vx;
    w.vy = vy;
    if (vx) w.dir = Math.sign(vx);
    w.anchor = null;
    play(w, 's2');
  }

  // Move a standing walker with its surface, which moved (dx, dy) over ms. Rising or sideways
  // moves beyond a nudge launch it at the surface's speed; a sideways shove still hops.
  function carry(w, dx, dy, ms) {
    w.fx += dx; w.y += dy;
    if (dy < -2 || Math.abs(dx) > 2) {
      const k = FRAME_MS / Math.max(16, ms), p = Math.sqrt(PAD_POWER), vx = clampV(dx * k) * p;
      launch(w, vx, Math.min(clampV(dy * k) * p, -Math.abs(vx) / 2));
    }
  }

  // Rebuild the surface map, then carry each standing walker with the surface it stood on.
  let pending = 0, burstStart = 0;
  function rebuild() {
    pending = 0;
    buildRects();
    for (const w of walkers) {
      const a = w.state === 'walk' && w.anchor !== 'floor' && w.anchor;   // floor riders move in floorMoved()
      if (a) {
        const nr = rects.find(r => r.src === a.src && r.part === a.part);
        w.anchor = nr || null;
        if (nr) carry(w, nr.x - a.x, nr.y - a.y, performance.now() - burstStart);
      }
      if (w.state !== 'held') { w.fx = clampX(w.fx); draw(w); }   // the page may have got narrower
    }
  }
  const rebuildSoon = delay => {
    if (pending) return;
    burstStart = performance.now();
    pending = setTimeout(rebuild, delay);
  };

  // Walkers on the window-bottom floor ride it up as it rises, and free fall when it drops away.
  let lastFloor = 0, lastFloorT = 0;
  function floorMoved() {
    const f = floorY(), now = performance.now(), dy = f - lastFloor, ms = now - lastFloorT;
    lastFloor = f; lastFloorT = now;
    if (dy) for (const w of walkers) {
      if (w.state !== 'walk' || w.anchor !== 'floor') continue;
      if (dy < 0) carry(w, 0, dy, ms); else launch(w, 0, 0);
      draw(w);
    }
  }

  // Is the page background behind (cx, cy) light? Nothing painted there means the default white canvas.
  function lightBehind(cx, cy) {
    for (const n of document.elementsFromPoint(cx, cy)) {
      if (n === host) continue;
      const cs = getComputedStyle(n);
      if (cs.backgroundImage !== 'none') return false;   // shortcut: images/gradients count as not white
      if (transparent(cs.backgroundColor)) continue;
      const m = cs.backgroundColor.match(/^rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
      return !!m && 0.2126 * m[1] + 0.7152 * m[2] + 0.0722 * m[3] > 200;
    }
    return true;
  }

  // w.fx = feet centre x, w.y = ground row (first row under the feet), w.dir = 1 right / -1 left
  function spawn() {
    const wrap = document.createElement('div');
    wrap.className = 'wrap';
    const el = document.createElement('i');
    wrap.append(el);
    root.append(wrap);
    // spread spawns across the top of the visible area and alternate direction, so walkers added together don't stack
    const n = walkers.length;
    const w = { el, wrap, fx: Math.round((scrollX + innerWidth / 2) / S) + (n % 7 - 3) * 12, y: Math.round(scrollY / S) + 12, dir: n % 2 ? -1 : 1 };
    launch(w, 0, 0);

    let trail = [];   // pointer positions from the last 100ms, for facing and throw speed
    const hold = e => {
      const x = e.clientX + scrollX, last = trail.at(-1);
      if (last && Math.abs(x - last.x) >= 2) w.dir = Math.sign(x - last.x);   // face the way it's being dragged
      trail = [...trail.filter(p => e.timeStamp - p.t <= 100), { t: e.timeStamp, x, y: e.clientY + scrollY }];
      w.fx = clampX(Math.round(x / S));
      w.y = Math.round((e.clientY + scrollY) / S) + el.offsetHeight - 2;   // hang from the cursor by the head
      draw(w);
    };
    el.addEventListener('pointerdown', e => {
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      w.state = 'held'; play(w, 's2');
      trail = [];
      hold(e);
    });
    el.addEventListener('pointermove', e => { if (w.state === 'held') hold(e); });
    const release = e => {
      if (w.state !== 'held') return;
      // throw at the pointer's speed over the last 100ms (screen px/ms -> world px/frame); a pause first means a plain drop
      const pts = trail.filter(p => e.timeStamp - p.t <= 100), a = pts[0], b = pts.at(-1);
      const k = a && b.t > a.t ? FRAME_MS / S / (b.t - a.t) : 0;
      launch(w, k && clampV((b.x - a.x) * k), k && clampV((b.y - a.y) * k));
    };
    el.addEventListener('pointerup', release);
    el.addEventListener('pointercancel', release);

    walkers.push(w);
    draw(w);
  }

  function play(w, name) {
    if (w.el.classList.contains(name) && w.anim) return;
    w.el.className = 'sprite ' + name;
    w.anim = w.el.getAnimations({ subtree: true })[0];   // the ::before CSS animation
    w.anim.pause();                                      // JS steps frames so movement stays locked to them
    w.frames = Math.round(w.anim.effect.getComputedTiming().duration / FRAME_MS);
    w.frame = 0;
  }

  function step(w) {
    if (w.state === 'held') return;
    // the page changed under us, or we were dropped inside something: pop out on top of it
    for (let k = 0; k < 100 && solid(w.fx, w.y - 1); k++) w.y--;
    const h = w.el.offsetHeight;
    if (w.state === 'walk') {
      const nx = w.fx + w.dir * WALK;
      let up = 0;
      while (up <= MAX_STEP && solid(nx, w.y - 1 - up)) up++;
      // wall = anything at body height (above a steppable ledge) in the column the front edge moves into
      const front = nx + (w.dir > 0 ? BODY_R : -BODY_L);
      let wall = false;
      for (let r = w.y - 1 - MAX_STEP; r >= w.y - h; r--) wall ||= solid(front, r);
      if (wall || up > MAX_STEP) w.dir = -w.dir; else { w.fx = nx; w.y -= up; }
      let down = 0;
      while (down <= MAX_DROP && !ground(w.fx, w.y + down)) down++;
      if (down > MAX_DROP) launch(w, 0, 0);
      else { w.y += down; w.anchor = hit(w.fx, w.y, true) || (w.y >= floorY() ? 'floor' : null); }
    } else {
      // airborne: ≤1px sub-steps visit every row, so fast moves can't tunnel through thin borders
      w.vy = Math.min(w.vy + GRAVITY, MAX_V);
      const n = Math.ceil(Math.max(Math.abs(w.vx), Math.abs(w.vy), 1));
      for (let i = 0; i < n; i++) {
        const px = Math.round(w.fx), py = Math.round(w.y);
        if (w.vy >= 0 && ground(px, py)) { w.fx = px; w.y = py; w.state = 'walk'; play(w, 's1'); break; }   // floors only catch on the way down
        const nx = w.fx + w.vx / n, ny = w.y + w.vy / n, qx = Math.round(nx), qy = Math.round(ny);
        if (w.vx && solid(qx + (w.vx > 0 ? BODY_R : -BODY_L), qy - (h >> 1))) { w.vx = -w.vx / 2; w.dir = -w.dir; continue; }   // bounce off a wall
        if (w.vy < 0 && solid(qx, qy - h)) { w.vy = 0; continue; }   // bump a ceiling
        w.fx = nx; w.y = ny;
      }
    }
    w.frame = (w.frame + 1) % w.frames;
    w.anim.currentTime = w.frame * FRAME_MS + 1;
    draw(w);
  }

  function draw(w) {
    const { el, fx, y } = w, wd = el.offsetWidth, h = el.offsetHeight;
    el.style.transform = `translate(${(fx - (wd >> 1)) * S}px,${(y - h) * S}px) scale(${S})` +
      (w.dir < 0 ? ` translateX(${wd}px) scaleX(-1)` : '');
    w.wrap.classList.toggle('outline', lightBehind(fx * S - scrollX, (y - h / 2) * S - scrollY));
  }

  function start() {
    document.documentElement.append(host);
    buildRects();
    lastFloor = floorY(); lastFloorT = performance.now();
    addEventListener('resize', () => { floorMoved(); rebuildSoon(100); });   // short, so launch speed tracks the drag
    addEventListener('scroll', () => { floorMoved(); rebuildSoon(300); }, { passive: true });   // fixed/sticky things move relative to the page
    new MutationObserver(() => rebuildSoon(300)).observe(document.body, { subtree: true, childList: true, attributes: true, characterData: true });
    // floorMoved() here too: a tick can run after a scroll but before its scroll event
    setInterval(() => { floorMoved(); walkers.forEach(step); }, FRAME_MS);
  }

  window.__walker = { add: () => ready(() => spawn()) };
  ready(() => { start(); spawn(); });
})();
