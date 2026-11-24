import { mkdirSync, writeFileSync } from "node:fs";

// One line, deadpan: the toaster blames the bread and takes a formal break.
// Punch lands on the last words; no bread/toast pun, no parenthetical aside.
const line =
  "TOASTING FAILED. THE BREAD WAS RUDE, SO I AM ON BREAK UNTIL FURTHER NOTICE.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
