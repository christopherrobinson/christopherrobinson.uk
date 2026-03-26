import type { APIRoute } from 'astro';
import { resolve } from 'node:path';
import sharp from 'sharp';
import { encode } from 'sharp-ico';

const faviconSrc = resolve('src/images/favicon.png');

export const GET: APIRoute = async () => {
  const buffer = await sharp(faviconSrc).resize(32).toFormat('png').toBuffer();
  const icoBuffer = encode([buffer]);

  return new Response(Uint8Array.from(icoBuffer), {
    headers: { 'Content-Type': 'image/x-icon' },
  });
};
