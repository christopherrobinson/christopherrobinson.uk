import type { APIRoute } from 'astro';
import rss from '@astrojs/rss';

export const GET: APIRoute = async (context) => {
  const posts = await getBlogPosts();

  return rss({
    customData: '<language>en-gb</language>',
    description: 'Blog Posts',
    items: posts.map(({ data, id }) => ({
      link: `/blog/${id}/`,
      pubDate: data.date,
      title: data.title,
    })),
    site: context.site ?? '',
    title: site.name,
  });
}
