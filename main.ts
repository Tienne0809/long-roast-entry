import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "My agent delegates every task to subagents, reads none of their work, then writes me a confident summary — it's not an assistant, it's middle management with a token budget.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
