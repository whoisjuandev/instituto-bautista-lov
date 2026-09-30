# IBC Vite redesign replica

## Objective
Reproduce the user-supplied site at `/Users/juancruzlescano/Developer/IBC-redisenio-completo/ibc-redisenio` faithfully within the existing React/Vite app on `dev`, retaining its real content, imagery, native disclosure behavior, mobile navigation, consultation draft, and responsive styling. Do not deploy or push without a separate request.

## Context and constraints
- Source of visual/content truth: external `index.html`, `styles.css`, `app.js`, `assets/`, `robots.txt`, `sitemap.xml`, and companion README/VALIDACION. Exact visual replica takes precedence over generic style heuristics.
- Existing project: Vite + React + TypeScript; preserve working scripts and locally hosted family PDF paths. Reuse existing photos/logo and copy source licensed fonts and their OFL texts.
- Source prototype deliberately sets `noindex,follow`; do not carry this into a production-bound app. Keep canonical, OG, structured data, sitemap, and robots mutually consistent with current institutional domain.
- Source business details (2027 form, contact, schedules, course offers), school photos, logo and PDF freshness need institutional confirmation before deployment; user supplied prototype for implementation, not publication authorization.
- No tests/TDD mode configured or selected (source: repository inspection; effective TDD unknown, ordinary functional validation only). Available commands: `npm run build`, `npm run lint`, `npx tsc --noEmit -p tsconfig.app.json` if applicable. Verification must report observed results rather than inferred results.
- Delivery strategy: exception-ok for faithful full-page replacement within one requested dev branch, rather than slicing an inseparable visual replica into artificial PR chains; forecast >400 authored lines (~1300+ including markup and CSS). No push/PR planned. Each completed task gets a Conventional Commit on dev.

## Tasks
- [ ] **T1 — Recreate the page and interactions.** Route: delegated writer (multiple nontrivial files). Reproduce sections, order, typography, imagery, navigation, native disclosures, exclusive levels, consultation draft, reduced motion and responsiveness in React/Vite. Scope: `src/pages/Index.tsx`, `src/components/` as needed, `src/index.css`, `src/App.css`, `public/fonts/`, `public/images/` only if missing. Checks: focused build/typecheck and lint; review sections, anchors and behavior against source. Commit evidence: pending.
- [ ] **T2 — Integrate metadata and static publication files.** Route: delegated writer (multiple nontrivial files). Adapt source metadata and structured data for Vite, ensure reachable local paths and production indexing policy, include robots and sitemap matching domain; keep PDF links local. Scope: `index.html`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` if needed, source-facing page only for corrected local PDF links. Checks: build/lint, metadata/asset references and JSON-LD sanity. Commit evidence: pending.
- [ ] **T3 — Verify visual and functional equivalence.** Route: delegated verifier; browser inspection if available. Compare at mobile and desktop, test nav, levels, FAQ, contact draft without sending, asset loading and reduced motion. Fix only scoped regressions in a separate work-unit commit if needed. Record each skipped/unavailable check. Commit evidence: pending if a fix is made.

## Acceptance
- React/Vite serves a faithful copy of all source sections with the same responsive layout and meaningful behaviors; no placeholder content or broken local assets.
- `npm run build` and relevant checks observed; any baseline lint failures called out explicitly.
- Each completed implementation work unit recorded with commit identity; remote dev stays untouched until authorized.

## Progress
Exploration completed; source is a standalone 444-line HTML page, 361-line stylesheet and 140-line script with local photos and OFL fonts. T1 in progress, delegated writer pending. Source's intentionally demo-only noindex is not production policy. Current `dev` clean before implementation except auto-generated local CodeGraph index, which is not part of the feature.
