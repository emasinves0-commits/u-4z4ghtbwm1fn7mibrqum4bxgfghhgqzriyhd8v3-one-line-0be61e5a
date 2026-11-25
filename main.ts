import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "The garden gnome flipped my lawnmower, revved it to full throttle, and mowed itself into the neighbor's prize petunias.";
const OUTPUT_PATH = "/output/entry.txt";
const EXPECTED_CHARS = 119;

const entryChars = [...ENTRY_TEXT].length;
if (entryChars !== EXPECTED_CHARS) {
  throw new Error(`entry is ${entryChars} chars, expected ${EXPECTED_CHARS}`);
}
if (!/^[\x00-\x7F]*$/.test(ENTRY_TEXT)) {
  throw new Error("entry is not pure ASCII");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY_TEXT);
console.log(ENTRY_TEXT);
