import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One ridiculous-at-first-glance startup pitch, 170 chars (gate max 200):
// renting silence by the hour to tired office workers.
const pitch =
  "We rent silence by the hour: small soundproof rooms in loud cities where tired office workers pay to sit alone, because quiet is the one thing a city cannot make more of.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, pitch);
console.log(`wrote ${target} (${pitch.length} chars)`);
