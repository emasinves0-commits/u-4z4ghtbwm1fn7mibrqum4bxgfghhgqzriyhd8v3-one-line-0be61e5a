import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_TEXT =
  "The microwave's timer blinked \"5:00\", just as my grandma's ghost walked in, arms outstretched, whispering \"I brought the leftovers.\"";
const OUTPUT_PATH = "/output/entry.txt";
const EXPECTED_CHARS = 132;

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
