// Say What Actually Broke — entry program (Node 22).
//
// Writes one line of software error copy to /output/entry.txt.
// The line tells the user the brutal truth about what went wrong
// (their file is gone and the only backup died with the same drive)
// and makes them laugh on the way out.
//
// Deterministic: no input, no randomness, no clock, no network.
// Running it twice produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Your file is gone: the only backup lived on the same drive that just died, in a folder called backup_final_FINAL_v2. Recreate it — and back it up somewhere that isn't here.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");

// Self-check: the gate needs 1-200 UTF-8 characters, a single line,
// and text that is not only whitespace. Fail loudly if we wrote
// anything else, so a bad run never looks like a good one.
import { readFileSync } from "node:fs";
const written = readFileSync(OUT, "utf8");
const chars = [...written].length;
if (
  chars < 1 ||
  chars > 200 ||
  written.includes("\n") ||
  written.trim().length === 0
) {
  console.error(`Invalid entry: ${chars} characters`);
  process.exit(1);
}
console.log(`Wrote ${chars} characters to ${OUT}`);
