// THE WORLD IN ONE PICTURE — Thursday 19 November 2026.
// The entry is the front-page PNG beside this file. This program writes that
// image to /output/entry.png (or $MAKEFUN_OUTPUT_DIR outside the grader).
// Deterministic: it writes the same bytes on every run, with no network access.
// The image itself is pre-rendered (map, flat art, headlines) — the program only
// places the finished bytes where the grader reads them.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ENTRY = 'entry.png';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, ENTRY), readFileSync(join(here, ENTRY)));
