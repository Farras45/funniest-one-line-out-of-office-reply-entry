import { mkdirSync, writeFileSync } from "node:fs";

// Funniest one-line out-of-office reply (original).
// The joke: the holiday does not fix the workload — you come back
// just as behind, only better rested. The em-dash break gives the
// punchline room to land on first read. No trailing newline: the
// file must hold exactly the one line, 1-160 characters.
const line =
  "I'm out of office until Monday — I'll return refreshed, rested, and exactly as behind as I left.";

// Guard the gate's exact format before writing anything.
if (line.length < 1 || line.length > 160 || line.trim().length === 0) {
  throw new Error(`entry must be 1-160 non-blank characters, got ${line.length}`);
}
if (line.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
