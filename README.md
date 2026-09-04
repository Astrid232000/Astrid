# ZawadieAI+

**ZawadieAI+ Sales Qualifier & Sales Assistant** is an AI-powered sales platform designed to help businesses turn leads into qualified sales opportunities.

It combines AI-powered lead qualification with practical sales assistance, helping sales teams understand leads, prioritize opportunities, and prepare better follow-ups.

## Purpose

The platform is being developed as part of Zawadie's transition toward **AI + Human augmented business services**, where artificial intelligence improves productivity while people provide judgment, creativity, customer understanding, and accountability.

## Who It Is For

The platform is designed for businesses that want to improve their lead qualification and sales processes.

It is being designed as a reusable product rather than a tool for only one company.

## Core Capabilities

* Lead analysis and qualification
* Lead scoring
* Buying-signal detection
* Sales recommendations
* Personalized response generation
* Follow-up assistance
* Lead history and insights

## Vision

Develop a scalable AI + Human sales solution that Zawadie can eventually offer to businesses as part of its AI-Sales Operations services.

## Development

Built as a modern web application using Visual Studio Code and AI-powered technologies.

---

## Tech Stack

- **Next.js 16** (App Router, TypeScript) — UI + API routes in one app
- **PostgreSQL + Prisma 7** — data layer, tenant-scoped by `companyId`
- **Auth.js (NextAuth) v5** — credentials + JWT sessions, role-based access
  (`OWNER` / `ADMIN` / `SALES_REP`)
- **OpenAI** — structured (tool-call, schema-validated) output for
  lead qualification and sales assistance, never free-form text
- **Zod** — input validation on every API route and AI output
- **Vitest** — service-level tests (tenant isolation, etc.)

## Getting Started

```bash
npm install
cp .env.example .env
```

Fill in `.env`:

- `DATABASE_URL` — a Postgres connection string. For a normal setup, run
  Postgres however you normally would (a local install, Docker, or a
  managed provider) and point this at it.
  Note: `npx prisma dev --detach` (Prisma's own throwaway local server) is
  tempting for a no-install option, but it proved unreliable in
  development here — connections dropped under normal use ("Connection
  terminated unexpectedly"). If you don't have Postgres and can't use
  Docker/admin rights either, a real portable Postgres (e.g. the
  EnterpriseDB Windows zip — unzip, `initdb`, `pg_ctl start`, no installer)
  is the more stable no-install fallback.
- `AUTH_SECRET` — generate with `npx auth secret`.
- `OPENAI_API_KEY` — required for the AI qualification/assistant
  features (get one at platform.openai.com). Everything else in the app
  works without it; those two endpoints return a clear error if it's
  missing.

Then:

```bash
npx prisma migrate dev   # create the schema
npm run dev               # http://localhost:3000
```

Sign up creates a new company and its first `OWNER` user. From Settings
(Owner/Admin only) you can add products, qualification criteria, a sales
process, communication style, and invite teammates as `ADMIN` or
`SALES_REP`.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm start` | Run a production build |
| `npm run lint` | ESLint |
| `npm test` | Vitest (needs `DATABASE_URL` reachable) |
| `npx prisma migrate dev` | Apply schema changes locally |
| `npx prisma studio` | Browse the database |

## Architecture Notes

- **Multi-tenancy**: every tenant-owned table carries `companyId`; every
  service function takes `companyId` from the authenticated session (never
  from the request body) and scopes its Prisma queries with it. See
  [src/lib/services/tenantIsolation.test.ts](./src/lib/services/tenantIsolation.test.ts)
  for the regression test.
- **Human + AI separation**: `LeadFact` (human/import-sourced) is a
  separate table from `LeadAnalysis`/`SalesRecommendation` (AI-sourced).
  AI records are append-only/versioned, start `PENDING`, and require an
  explicit human Approve/Reject before they're treated as final anywhere.
  The UI renders facts and AI output in visibly distinct panels.
- **Anti-hallucination**: AI calls go through
  [src/lib/ai/structuredCall.ts](./src/lib/ai/structuredCall.ts), which
  forces the model's response through a Zod-validated tool call — never
  freeform text — and retries once on a schema mismatch before surfacing a
  clear error. The qualification prompt requires citing the specific
  `LeadFact` IDs behind a score, and the service layer drops any cited
  fact/product ID that doesn't actually belong to that lead/company rather
  than trusting the model's IDs blindly.
- **Lead enrichment** (`LeadEnrichment` model, "Research this lead" on the
  Facts panel): for when all you have on a lead is the bare minimum —
  runs the same real, cited web search as contact research, but scoped to
  general company intelligence (industry, size, recent news/signals)
  instead of who-to-contact. Findings sit in their own PENDING record,
  never written to `LeadFact` directly; approving copies every finding
  into `LeadFact` in one step (`source: AI_RESEARCH`, with its citations
  in a `sources` field rendered as `[1] [2]` links) — that's the one
  moment an AI finding becomes an actual fact the qualification engine can
  cite. Rejecting discards them.
- **Contact research** (`ContactResearch` model, "Who to Contact" panel):
  finds/verifies the right person at a lead's company using a *real, cited*
  web search ([src/lib/ai/webSearch.ts](./src/lib/ai/webSearch.ts), OpenAI
  Responses API's `web_search` tool) — never a plain model guess, since a
  contact name has no company-provided fact to ground it in. It's a
  two-step "search then structure" call: step 1 searches freely and
  answers in prose with citations, step 2 takes only that prose + those
  citations as evidence and reformats it into a reviewable record,
  instructed to copy names/titles exactly rather than embellish them
  (verified live: an initial version expanded "Dave Davison" from a real
  source into the fabricated "David D. Davison" — fixed by making the
  no-embellishment rule explicit in both steps). Sources are re-filtered
  against the URLs the search actually returned before being stored, same
  "never trust an AI-returned identifier blindly" rule as citedFactIds. If
  the search finds nothing solid, it reports `UNKNOWN`/`LOW` confidence
  with `recommendedName: null` rather than inventing someone.
- Code structure under `src/lib` and `src/app/api` mirrors the design
  directly (`services/`, `ai/`, `auth/`, one route file per REST-ish
  endpoint). See [REQUIREMENT.md](./REQUIREMENT.md) for the product spec
  this implements and [CLAUDE.md](./CLAUDE.md) for the engineering
  standards this project is held to.

## Deployment

```bash
docker build -t zawadie-app .
docker run -p 3000:3000 \
  -e DATABASE_URL=... \
  -e AUTH_SECRET=... \
  -e OPENAI_API_KEY=... \
  zawadie-app
```

Run `npx prisma migrate deploy` against the target database before
starting the container (not baked into the image, so migrations stay under
your CI/CD's control).
