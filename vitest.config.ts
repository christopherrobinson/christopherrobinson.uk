import { getViteConfig } from 'astro/config';
import type { ViteUserConfigExport } from 'vitest/config';

export default getViteConfig({
	test: {
	},
}) satisfies ViteUserConfigExport;
