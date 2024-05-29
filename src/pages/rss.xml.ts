import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    customData: '<language>en-gb</language>',
    description: 'Blog Posts',
    items: posts.map(({ data, slug }) => ({
      link: `/blog/${slug}/`,
      pubDate: data.date,
      title: data.title,
    })),
    site: context.site ?? '',
    title: site.name,
  });
}
