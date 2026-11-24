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
console.log(`Wrote ${ENTRY.length} characters to ${OUT}`);
