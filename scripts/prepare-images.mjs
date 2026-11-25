// One-off: converts the client's original photos (downloaded from the client's site) to AVIF/WebP sizes in public/img.
// Usage: node scripts/prepare-images.mjs <folder with originals>
import sharp from "sharp";
import path from "node:path";

const src = process.argv[2];
if (!src) { console.error("usage: node scripts/prepare-images.mjs <src-dir>"); process.exit(1); }
const out = path.resolve("public/img");

const jobs = [
  { file: "rectangle-156.jpg", name: "hryp-kolona", widths: [480, 800, 1156] },
  { file: "rectangle-156.jpg", name: "hryp-kolona-mob", widths: [480, 600], extract: { left: 110, top: 220, width: 600, height: 450 } },
  { file: "dsc00250-min.png", name: "tsentr-pidgotovky", widths: [480, 908] },
  { file: "dsc06769-min.png", name: "nagorody", widths: [480, 800, 1175] },
];

for (const j of jobs) {
  for (const w of j.widths) {
    let img = sharp(path.join(src, j.file)).flatten({ background: "#ffffff" });
    if (j.extract) img = img.extract(j.extract);
    img = img.resize({ width: w, withoutEnlargement: true }).modulate({ brightness: 1.02 });
    await img.clone().webp({ quality: 74 }).toFile(path.join(out, `${j.name}-${w}.webp`));
    await img.clone().avif({ quality: 52 }).toFile(path.join(out, `${j.name}-${w}.avif`));
  }
}
await sharp(path.join(src, "logo.svg"), { density: 288 }).resize({ width: 124 }).webp({ quality: 90 }).toFile(path.join(out, "logo-shchyt.webp"));
await sharp(path.join(src, "logo.svg"), { density: 288 }).resize({ width: 124 }).png().toFile(path.join(out, "logo-shchyt.png"));
console.log("done");
