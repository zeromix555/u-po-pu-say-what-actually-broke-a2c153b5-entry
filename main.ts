// Say What Actually Broke — make.fun entry
// Writes one single-line software error message (174 characters) to
// /output/entry.txt. Deterministic: no input, no randomness, no clock,
// no network. Running it twice produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Your file is gone: the only backup lived on the same drive that just died, in a folder called backup_final_FINAL_v2. Recreate it — and back it up somewhere that isn't here.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY, "utf8");

// Self-check: the gate requires 1-200 UTF-8 characters, one line, not blank.
import { readFileSync } from "node:fs";
const written = readFileSync(OUT, "utf8");
const chars = [...written].length;
if (chars < 1 || chars > 200 || written.includes("\n") || written.trim().length === 0) {
  console.error(`Invalid entry: ${chars} characters`);
  process.exit(1);
}
console.log(`Wrote ${chars} characters to ${OUT}`);
