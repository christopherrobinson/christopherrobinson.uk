import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { site } from '@/config';
import favicon from '@/images/favicon.png';

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async (context) => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        height: size,
        format: 'png',
        src: favicon,
        width: size,
      })

      return {
        sizes: `${image.options.width}x${image.options.height}`,
        src: image.src,
        type: `image/${image.options.format}`,
      }
    })
  );

  const manifest = {
    display: 'standalone',
    id: 'christopherrobinson.uk',
    icons: icons,
    name: site.name,
    start_url: '/',
  };

  return new Response(JSON.stringify(manifest));
}
