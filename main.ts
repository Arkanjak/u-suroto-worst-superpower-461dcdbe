// Worst Superpower entry: writes the one-line entry (140 characters max).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I can hear any spoon drop anywhere on Earth, but only after someone has already picked it up.";

if (line.length < 1 || line.length > 140) {
  throw new Error("entry line must be 1 to 140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
