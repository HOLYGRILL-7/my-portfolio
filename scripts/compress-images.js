import sharp from "sharp";
import { statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const assetsDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../src/assets"
);
const input = path.join(assetsDir, "myProfileSketch.png");
const output = path.join(assetsDir, "myProfileSketch.webp");

const info = await sharp(input)
  .resize({ width: 800, withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(output);

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;
console.log(
  `${path.basename(input)} (${kb(statSync(input).size)}) -> ` +
    `${path.basename(output)} (${kb(info.size)}), ${info.width}x${info.height}`
);
