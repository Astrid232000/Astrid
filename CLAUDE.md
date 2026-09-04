# CLAUDE.md

Guidance for Claude (or any developer) working in this repository.

## Claude Instructions

Act as the lead developer for this project.

- Use only HTML, CSS, and vanilla JavaScript. Do not install or require external libraries, frameworks, packages, or extensions.
- Keep the implementation simple, modular, responsive, and easy to maintain.
- Prioritize visual communication over text and make the interface usable for people with limited reading ability.
- Build incrementally, test each change, and preserve working features.

The one standing exception is the Google Fonts `<link>` in `index.html` — it's a typography stylesheet, not code, and the page falls back to system fonts if it can't load. Don't add any other external request, script, or package.

## Project Overview

**SAFE OR DANGER!** is a 2D visual decision game that teaches children and young people to recognize everyday safe and dangerous situations. Full requirements live in [REQUIREMENT.md](REQUIREMENT.md) — read it before making product decisions.

Players see a picture-first "scene" (large emoji + a short caption, also read aloud), have a few seconds to choose **SAFE** or **DANGER**, and get simple visual (and spoken) feedback. Difficulty rises across 6 age-phase levels spanning roughly ages 4 through 20+, selectable individually or played as one continuous journey; the game tracks lives, score, streaks, and current level, and ends with a summary screen.

## Project Structure

```
REQUIREMENT.md   Product requirements (source of truth for "what to build")
CLAUDE.md        This file — how to work in the repo
index.html       The entire game: HTML + CSS + JS in one file
```

There is no build step, package manager, or dependency file — and there should not be one. To run the game, open `index.html` directly in a browser.

## How to Test a Change

There's no test suite; verify manually, in a browser, every time:

1. Open (or reload) `index.html`.
2. Click **Let's Play!** and play at least one full round on a few of the 6 levels (or enough to trigger a level-up transition), and separately try the start-screen level grid to jump straight into a single level.
3. Deliberately answer wrong at least once to confirm: a life is lost, the feedback panel and progress dots update, and the round penalty is applied. Answer correctly 3 times in a row to confirm the streak "hype" banner, fanfare, and bonus points/life-restore trigger correctly.
4. Confirm both end states work: finishing all rounds ("Great Game!") and losing all 3 lives ("Out of Lives!"); from the end screen, confirm "🔀 Choose a Level" opens the lightweight level picker (no rules recap).
5. Toggle light/dark theme, the sound mute button, and the 🗣️ read-aloud toggle; reload and confirm all three preferences persisted.
6. Resize the window / check mobile width — layout is single-column and must not overflow horizontally.

## Architecture (inside `index.html`)

- **Design tokens:** CSS custom properties on `:root` (light palette by default), overridden under `@media (prefers-color-scheme: dark)` and `:root[data-theme="dark"]` for the manual toggle. Any new color must be added as a token in both places.
- **Script:** one `(function(){ "use strict"; ... })()` IIFE, no globals leaked besides the browser's own.
- **Config constants:** `LIVES_MAX`, `ROUNDS_PER_LEVEL` (10 — 5 danger + 5 safe, sampled per level played), `READ_WORDS_PER_SEC` (drives the per-scene reading-time timer calc).
- **Content data:**
  - `CATEGORIES` — icon/label per situation category (traffic, fire, water, strangers, animals, home, poison, internet, outdoor, body, social, money, vehicle, work, substances — 15 total).
  - `TIERS` — per-level (age-phase) config: `level`, `name`, `emoji`, `ageRange`, `answerBuffer`/`minTime`/`maxTime` (feed `computeRoundTime()`, not a flat time limit), `base` points, intro `tip`. Six phases: Tiny Explorers (4–6) → Safety Explorer (7–9) → Safety Champion (10–12) → Safety Navigator (13–15) → Safety Strategist (16–18) → Safety Pro (19–20+).
  - `CONTENT` — the scenario bank: `{ id, level, category, isDanger, visual, caption, feedback }`. 180 scenarios total, 30 per level (15 danger + 15 safe).
  - `CHEER_OPENERS` / `TRY_AGAIN_OPENERS` / `STREAK_HYPE_WORDS` — randomized phrase pools for correct/wrong/streak-milestone feedback text (both on-screen and spoken), so wording doesn't repeat.
- **State:** `freshState(opts)` builds a fresh `order` array by sampling a balanced danger/safe subset per level from `CONTENT` and shuffling; `opts.onlyLevel` restricts it to a single level for the start-screen/end-screen level picker. `levelOffsets` maps each level number to its start index in `order` (needed because single-level sessions don't start at index 0 of a full 6-level run).
- **Render/flow functions:** `renderHeader`, `renderDots`, `renderLevelIntro`, `renderRound`, `decide` (scoring + feedback + streak hype), `advance`, `endGame`, `fillLevelGrid` (populates both the start-screen and end-screen level pickers), `launchGame`/`newGame` (start a session, optionally scoped to one level).
- **Sound effects:** a lazily-created, shared `AudioContext` and a small oscillator-based `beep()` helper generate all SFX (correct/wrong/level-up/tick/streak-fanfare) — there are no audio files. Toggled via the header's sound-effects button and remembered in `localStorage`.
- **Background music:** a looping, amapiano-flavored instrumental groove (log-drum bassline, soft kick, shaker via a generated noise buffer, jazzy Gm7 chord stabs, sparse lead hook) — no audio files, no vocals, all scheduled ahead of time each loop with Web Audio oscillators/noise through its own dedicated, quiet `musicGain` node (`startMusic`/`stopMusic`/`scheduleMusicLoop`). Independent of the SFX toggle above, so muting one never affects the other. Starts on **Let's Play!**, loops continuously, and is toggled via the header's 🎵 button (also remembered in `localStorage`).
- **Read-aloud narration:** the Web Speech API (`speechSynthesis`) — no audio files, no external service. Deliberately terse by design (kids complained an earlier version talked too much): it speaks exactly two things — the scene caption + SAFE/DANGER prompt (`prompt` mood, so a non-reader can answer), and, only on a correct answer, one short joyful word (`celebrate` mood, or `streak` mood with a bigger word on a 3-streak milestone). Nothing is spoken for level intros, wrong/timed-out answers, or the feedback sentence — all of that stays fully visible on screen, it just isn't read aloud. `pickBestVoice()` selects the liveliest available English voice (re-run on `onvoiceschanged`); `speak(text, mood)` picks rate/pitch from `VOICE_MOODS`. A "🔊 Hear it again" button replays the last-spoken line via `replaySpeech()`. Toggled via the header's 🗣️ button and remembered in `localStorage`, independent of the SFX/music toggles.

## Conventions to Preserve

- Keep the game in a single `index.html` unless a change genuinely requires more files — if it ever does, keep additions to plain `<script src>` / `<link>` includes, never a bundler or package.json.
- New scenarios go into `CONTENT` following the existing shape; if a scenario needs a new category, add it to `CATEGORIES` too.
- Feedback text stays to one short, plain sentence per scenario. This game's audience has limited reading ability — default to icons, color, and shape before words for any new UI.
- Reuse the existing light/dark token pattern for any new CSS; don't hardcode colors outside `:root`.
- Don't add a build step, transpiler, or npm dependency, ever — that's a hard constraint from the Claude Instructions above, not a style preference.

## Workflow

- Build incrementally: make one focused change, then actually open/reload `index.html` and click through the affected flow (see "How to Test a Change") before starting the next change.
- Preserve working features — lives, streak bonuses, sound, music, read-aloud narration, theme toggle, keyboard shortcuts, the level/dot progress indicator, and the level-select pickers should still all work after any change, even ones that don't touch them directly.
