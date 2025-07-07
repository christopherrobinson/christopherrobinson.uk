import type { APIRoute } from 'astro';
import { getEntry } from 'astro:content';
import path from 'path';

export const prerender = false;

export const GET: APIRoute = async () => {
  let vehicleSlug = 'land-rover-freelander-2';

  if (!vehicleSlug) {
    return new Response('Missing vehicle.', { status: 400 });
  }

  try {
    const vehicle = await getEntry('vehicles', vehicleSlug);
    const fuelups = vehicle?.data?.fuelups;

    if (!Array.isArray(fuelups) || fuelups.length === 0) {
      return new Response('No fuelup data found', { status: 404 });
    }

    const totalLitres = fuelups.reduce((n, { litres }) => n + litres, 0);
    const totalMiles = fuelups.reduce((n, { miles }) => n + miles, 0);

    if (!totalLitres || !totalMiles) {
      return new Response('Insufficient fuel data', { status: 400 });
    }

    const imagePath = path.resolve(`public/images/vehicles/${vehicleSlug}.jpg`);
    const buffer = await generateMpgImage(((totalMiles / totalLitres) * 4.544), imagePath);

    return new Response(Uint8Array.from(buffer), {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Disposition': `inline; filename="${vehicleSlug}.png"`,
      },
    });
  }
  catch (error) {
    return new Response('Failed to generate image', { status: 500 });
  }
};
