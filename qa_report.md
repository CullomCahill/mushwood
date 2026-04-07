  QA Report — mushroomwoodworker.com

  Date: 2026-03-30 | Viewport tested: Desktop (~900px) + Mobile (375×812)

  ---
  Bug 1 — CONTENT | About page typo

  Severity: Medium
  First sentence reads I"m Cullom — a straight double-quote (") used instead of an apostrophe (').
  Should be: I'm Cullom

  ---
  Bug 2 — MOBILE | Nav bar broken layout

  Severity: High
  At 375px, the logo "MUSHROOM WOODWORKER" wraps to two lines and collides with the nav links. "STORE" is clipped at the right edge of the screen. There is no hamburger/collapsed menu — the nav is just squeezed and
  partially inaccessible.

  Screenshot: qa-mobile-home.png, qa-mobile-about.png (top of page, visible on all routes)

  ---
  Bug 3 — MOBILE | Store product text is tiny and hard to read

  Severity: Medium
  On mobile the store listing text (product name, description, price) renders very small — likely inheriting a small-caps or reduced font-size that works at desktop width but is borderline illegible at 375px.

  Screenshot: qa-mobile-store.png

  ---
  Bug 4 — DESKTOP | Store product names are very faint / small

  Severity: Low–Medium
  Desktop store product names render in a very small, light-weight, spaced caps style. On a white background with small text, contrast and legibility are marginal. Worth checking against WCAG AA contrast ratio.

  Screenshot: qa-desktop-store.png

  ---
  Bug 5 — CONTENT | "Desk lamp" has unpolished description

  Severity: Low
  Description reads: "Ikea lamp from the thrift store repurposed" — reads like a placeholder/dev note rather than customer-facing copy.

  ---
  Bug 6 — TECHNICAL | Missing favicon (404)

  Severity: Low
  favicon.ico returns a 404. Minor but causes a console error on every page load.

  ---
  Bug 7 — UX | Large whitespace gap on mobile home page

  Severity: Low
  Between the hero image and the featured products section there's a large blank gap on mobile. Likely a spacing unit that doesn't scale down.

  Screenshot: qa-mobile-home.png

  ---
  Summary










  ┌─────┬─────────────────┬──────────┬───────────────────┐
  │  #  │      Page       │ Severity │       Type        │
  ├─────┼─────────────────┼──────────┼───────────────────┤
  │ 1   │ About           │ Medium   │ Content typo      │
  ├─────┼─────────────────┼──────────┼───────────────────┤
  │ 2   │ All (mobile)    │ High     │ Nav layout broken │
  ├─────┼─────────────────┼──────────┼───────────────────┤
  │ 3   │ Store (mobile)  │ Medium   │ Text legibility   │
  ├─────┼─────────────────┼──────────┼───────────────────┤
  │ 4   │ Store (desktop) │ Low–Med  │ Text contrast     │
  ├─────┼─────────────────┼──────────┼───────────────────┤
✻ Cogitated for 1m 56s    │ Low      │ Copy quality      │