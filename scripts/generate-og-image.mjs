// Regenerates public/og-image.jpg (1200x630) from src/assets/profile.*.
// Run manually with `npm run og:generate` whenever the source photo changes.
import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(fileURLToPath(import.meta.url)) + "/..";
const assetsDir = path.join(root, "src/assets");
const outputPath = path.join(root, "public/og-image.jpg");

const NAME = "Firas Jamli";
const TITLE_LINES = ["INTELLIGENT DOCUMENT PROCESSING", "& DATA EXTRACTION SPECIALIST"];
const TAGLINE = "Document AI, OCR & Python Engineer";

const ACCENT = "#8b7cf6";
const ACCENT_BRIGHT = "#b3a8ff";
const INK_950 = "#0a0713";
const INK_900 = "#120e1f";
const INK_50 = "#f5f3fa";
const INK_200 = "#cec7e0";
const INK_400 = "#6c6389";
const EMERALD = "#34d399";

const W = 1200;
const H = 630;
const PHOTO_R = 150;
const PHOTO_CX = 230;
const PHOTO_CY = 320;
const TEXT_X = 440;

function findProfileSource() {
  if (!existsSync(assetsDir)) return null;
  const match = readdirSync(assetsDir).find((f) => /^profile\.(jpe?g|png|webp)$/i.test(f));
  return match ? path.join(assetsDir, match) : null;
}

function escapeXml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

async function buildBaseLayer() {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${INK_900}"/>
      <stop offset="100%" stop-color="${INK_950}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.04"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <circle cx="1040" cy="110" r="220" fill="${ACCENT}" fill-opacity="0.14"/>

  <circle cx="${PHOTO_CX}" cy="${PHOTO_CY}" r="${PHOTO_R + 3}" fill="none" stroke="${ACCENT}" stroke-width="6"/>

  <text x="${TEXT_X}" y="200" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="3" fill="${ACCENT_BRIGHT}">${escapeXml(TITLE_LINES[0])}</text>
  <text x="${TEXT_X}" y="234" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="3" fill="${ACCENT_BRIGHT}">${escapeXml(TITLE_LINES[1])}</text>

  <text x="${TEXT_X}" y="330" font-family="Arial, sans-serif" font-size="72" font-weight="800" fill="${INK_50}">${escapeXml(NAME)}</text>
  <text x="${TEXT_X}" y="378" font-family="Arial, sans-serif" font-size="28" fill="${INK_200}">${escapeXml(TAGLINE)}</text>

  <g transform="translate(${TEXT_X}, 430)" font-family="'Courier New', monospace" font-size="20" fill="${INK_400}">
    <text x="0" y="0">{</text>
    <text x="24" y="30"><tspan fill="${ACCENT_BRIGHT}">"role"</tspan>: <tspan fill="${EMERALD}">"IDP &amp; Python Development"</tspan>,</text>
    <text x="24" y="60"><tspan fill="${ACCENT_BRIGHT}">"location"</tspan>: <tspan fill="${EMERALD}">"Sousse, Tunisia"</tspan></text>
    <text x="0" y="90">}</text>
  </g>
</svg>`.trim();

  return sharp(Buffer.from(svg)).png().toBuffer();
}

async function buildPhotoLayer(sourcePath) {
  const size = PHOTO_R * 2;
  const circleMask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><circle cx="${PHOTO_R}" cy="${PHOTO_R}" r="${PHOTO_R}" fill="#fff"/></svg>`,
  );

  const resized = await sharp(sourcePath)
    .rotate() // normalize EXIF orientation, then metadata is dropped on output
    .resize(size, size, { fit: "cover", position: "attention" })
    .ensureAlpha()
    .png()
    .toBuffer();

  return sharp(resized)
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function main() {
  const sourcePath = findProfileSource();
  const baseLayer = await buildBaseLayer();

  const composites = [];
  if (sourcePath) {
    const photoLayer = await buildPhotoLayer(sourcePath);
    composites.push({
      input: photoLayer,
      left: PHOTO_CX - PHOTO_R,
      top: PHOTO_CY - PHOTO_R,
    });
    console.log(`Using photo: ${path.relative(root, sourcePath)}`);
  } else {
    console.warn("No src/assets/profile.* found — generating OG image without a portrait.");
  }

  await sharp(baseLayer)
    .composite(composites)
    .flatten({ background: INK_950 })
    .jpeg({ quality: 86 })
    .toFile(outputPath);

  console.log(`Wrote ${path.relative(root, outputPath)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
