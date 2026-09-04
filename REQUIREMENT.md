# SAFE OR DANGER!, Requirements

Create a 2D visual decision game that teaches children and young people to recognize everyday safe and dangerous situations.

The game must:
- Present situations mainly through pictures, symbols, colors, and optional sounds.
- Let players choose SAFE or DANGER.
- Use a short time limit for each decision.
- Include multiple categories of real-life situations.
- Increase difficulty as the player progresses.
- Reward correct and fast decisions.
- Give simple visual feedback after each answer.
- Include lives, a score, levels, and a final result.

## Implementation notes

These reflect how the current build (`index.html`) satisfies the requirements above — useful context for writing `CLAUDE.md` and `README.md`.

- **Format:** single self-contained `index.html` (HTML/CSS/vanilla JS, no build step, no external dependencies besides Google Fonts). Runs by opening the file directly in a browser.
- **Situations:** each round shows a large emoji "scene" plus a short caption instead of paragraphs of text, keeping reading to a minimum. Every caption and the SAFE/DANGER prompt are also read aloud via the browser's built-in speech synthesis (with a "🔊 Hear it again" replay button), so a child who can't read yet can still play — the narrator stays deliberately brief and only speaks that plus a short cheer on a correct answer, never a running commentary.
- **Categories (15):** Traffic, Fire & Heat, Water, Strangers, Animals, Home Safety, Poison & Medicine, Internet Safety, Playground, Body Safety, Friends & People, Money & Scams, Driving & Roads, Work & Independence, Alcohol & Drugs.
- **Decisions:** two big color-coded buttons, ✅ SAFE (green) and ⚠️ DANGER (red), with `S` / `D` keyboard shortcuts.
- **Time limit:** a circular countdown ring (green → amber → red) per round. The limit isn't fixed — it's computed per scene from the caption's reading time (matching the narration's pace) plus a flat per-level "answer buffer" just for choosing, clamped to a level-specific min/max. Running out counts as a miss.
- **Difficulty / age phases:** 6 levels spanning roughly ages 4 through 20+, each with its own age range, tip, and scoring base: Tiny Explorers (4–6) → Safety Explorer (7–9) → Safety Champion (10–12) → Safety Navigator (13–15) → Safety Strategist (16–18) → Safety Pro (19–20+, designed to be replayed indefinitely once someone's past 20). Levels 1–3 cover classic kid-safety situations; levels 4–6 add teen/young-adult topics (online scams, peer pressure, driving, workplace safety, renting, relationships). A start-screen level grid lets a player jump straight into practicing any single level instead of playing the full 6-level journey; the end screen offers a lightweight "Choose a Level" picker (no rules recap) to switch levels between playthroughs.
- **Content bank:** 180 scenes total — 30 per level (15 danger + 15 safe). Each playthrough randomly samples 5 danger + 5 safe scenes per level played (10 rounds), for strong replay variety.
- **Scoring:** points scaled by level + a speed bonus for fast answers + a streak bonus every 3 correct in a row.
- **Feedback:** one big ✅/❌ icon, a colored banner with a randomly-picked upbeat opener (varied phrasing so it never feels repetitive), and one short kid-friendly sentence explaining why — no dense text, deliberately simple. Every 3-in-a-row streak additionally gets its own bold, animated banner using one of several superlative "hype" words (e.g. "INCREDIBLE!", "PHENOMENAL!"), a layered fanfare sound, and the most excited narration mood.
- **Lives:** 3 hearts; a wrong or timed-out answer costs one; a 5-answer streak restores one; reaching 0 ends the game early ("Out of Lives!").
- **Sound effects:** optional, synthesized in-browser (no audio files) — chimes for correct/wrong/level-up/streak-milestone and a soft tick in the final 3 seconds; on by default, toggleable, state remembered per browser.
- **Background music:** an upbeat, looping tune (also synthesized in-browser, no audio files) starts when the player clicks **Let's Play!**, loops continuously at a low, non-distracting volume, and is independently toggleable via a separate 🎵 On/Off button so it never has to compete with or be silenced by the sound-effects toggle.
- **Read-aloud narration:** uses the browser's Web Speech API — no audio files, no external service. Deliberately terse: speaks only the scene caption + SAFE/DANGER prompt, and — on a correct answer only — one short joyful word ("Wow!", "Great!"; a bigger word like "INCREDIBLE!" on a 3-streak). Nothing is spoken for level intros, wrong answers, or the feedback sentence, all of which stay fully visible on screen. Auto-picks the liveliest available voice, speaks at a mood-appropriate rate/pitch, and is independently toggleable (🗣️ button) and remembered per browser, same pattern as sound effects and music.
- **Header stats:** score, current level (emoji + number), and lives are always visible, centered as one group with the title/tagline above them.
- **Final result:** final score, level reached (with its age range), scenes played, accuracy, danger-spotted / safe-trusted counts, best streak, and an encouraging title (from "🌟 Safety Superstar!" down to "📚 Keep Practicing!" — always positive, never shaming).
- **Accessibility/polish:** light/dark theme toggle (follows system by default), a vivid/playful dark palette, reduced-motion support, keyboard shortcuts, responsive single-column layout.
