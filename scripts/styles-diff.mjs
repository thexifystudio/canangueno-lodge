/**
 * Compara dos huellas de `styles-snapshot.mjs` y lista lo que cambió.
 *
 *   node scripts/styles-diff.mjs .shots/styles-antes.json .shots/styles-despues.json
 *
 * Sale 0 si son idénticas. Sale 1 y muestra hasta 40 diferencias si no.
 */
import { readFileSync } from "node:fs";

const [a, b] = process.argv.slice(2).map((f) => JSON.parse(readFileSync(f)));
if (!a || !b) {
  console.error(
    "Uso: node scripts/styles-diff.mjs <antes.json> <después.json>",
  );
  process.exit(2);
}

const diffs = [];
for (const page of new Set([...Object.keys(a), ...Object.keys(b)])) {
  const before = a[page] ?? {};
  const after = b[page] ?? {};
  for (const key of new Set([...Object.keys(before), ...Object.keys(after)])) {
    if (before[key] !== after[key]) {
      diffs.push({ page, key, before: before[key], after: after[key] });
    }
  }
}

if (!diffs.length) {
  console.log("✓ sin diferencias de estilo calculado");
  process.exit(0);
}

console.log(`${diffs.length} diferencias:\n`);
for (const d of diffs.slice(0, 40)) {
  console.log(`${d.page}  ${d.key}`);
  console.log(`  antes:   ${d.before}`);
  console.log(`  después: ${d.after}\n`);
}
process.exit(1);
