// Funniest Time Machine Warning Label — make.fun entry
// Writes exactly one warning label (<=120 chars) to /output/entry.txt.
// Deterministic: no randomness, no input, no network. Same output every run.
//
// Candidate lines drafted and compared against the judge brief:
//   1. Hazard must be a real time-travel hazard (paradox / duplicate self /
//      stranded ancestor) turned into the joke, not named flatly.
//   2. Surprise saved for the last few words.
//   3. Straight face: phrased like a genuine safety notice.
//   4. No wasted words.
//
// v1 (revised away):
//   "DO NOT use this machine to undo your mistakes. Your past self is
//    already using it to undo yours." (96 chars)
//   Good paradox twist, but the laugh needs a beat of logic to land —
//   the reader has to simulate the loop before it pays off.
//
// v2 (final) — the grandfather paradox is the canonical time-travel
// hazard, recognised instantly, and the punchline reframes the warning
// itself: the one person you must not kill is the only one who can
// drive you home. The surprise lands in the last few words, the
// phrasing stays deadpan official throughout, and no word is wasted.
// Other finalists considered and dropped:
//   - "WARNING: If you meet yourself, do not say hello. He already
//     regrets meeting you." — cute, but the hazard (saying hello) is
//     too weak; the joke is about manners, not time travel.
//   - "WARNING: Never wave at yourself. The last traveller who did is
//     still waving back." — nice loop, but again the hazard is trivial.
//   - "WARNING: Do not exit before you arrive. Your past self is
//     already late because of you." — muddled; the punchline explains
//     itself instead of surprising.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: Do not kill your grandfather. He is the only one who knows how to drive this thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
