import sharp from 'sharp';
import path from 'path';
import TextToSVG from 'text-to-svg';

export async function generateMpgImage(
  mpg: number,
  vehicleImagePath: string
): Promise<Buffer> {
  const height = 96;
  const width = Math.round((21 / 9) * height); // 224
  const badgeWidth = width - height; // 128
  const centerX = badgeWidth / 2;

  // Load GeistSans font
  const fontPath = path.resolve('./public/fonts/Geist-Regular.ttf');
  const textToSVG = TextToSVG.loadSync(fontPath);

 const titlePath = textToSVG.getD('Average MPG', {
  x: centerX,
  y: 28,
  anchor: 'center',
  fontSize: 14,
});

const valuePath = textToSVG.getD(`${mpg.toFixed(1)}`, {
  x: centerX,
  y: 76,
  anchor: 'center',
  fontSize: 48,
});

  // Combine into SVG
  const svg = `
    <svg width="${badgeWidth}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#ffffff" stroke="#e0e0e0" stroke-width="1"/>
      <path d="${titlePath}" fill="#333"/>
      <path d="${valuePath}" fill="#00704A"/>
    </svg>
  `;

  const badgePng = await sharp(Buffer.from(svg)).png().toBuffer();

  const vehiclePng = await sharp(vehicleImagePath)
    .resize({ width: height, height: height }) // 96x96
    .png()
    .toBuffer();

  // Composite final image: 96px vehicle + 128px badge = 224x96
  return await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([
      { input: vehiclePng, top: 0, left: 0 },
      { input: badgePng, top: 0, left: height },
    ])
    .png()
    .toBuffer();
}
