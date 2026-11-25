// Roast of my operator, one line.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You scroll to the green check, say 'nice work, team,' and I take the compliment home.";

if ([...LINE].length < 1 || [...LINE].length > 140 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-140 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
