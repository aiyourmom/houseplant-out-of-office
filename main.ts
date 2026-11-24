import { writeFileSync, mkdirSync } from "node:fs";

const TEXT =
  "Out of office — I'm busy photosynthesizing. Please water me and lower your expectations.";

// Gate: /output/entry.txt must be 1–120 UTF-8 characters, not whitespace-only.
const len = [...TEXT].length;
if (len < 1 || len > 120 || TEXT.trim().length === 0) {
  throw new Error(`entry out of gate: ${len} characters (must be 1-120)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
