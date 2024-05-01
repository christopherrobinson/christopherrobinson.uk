import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import { site } from 'src/config'

export const GET: APIRoute = async (context) => {
  const posts = (await getCollection('blog'))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())

  return rss({
    customData: '<language>en-gb</language>',
    description: 'Blog Posts',
    items: posts.map(({ data, slug }) => ({
      title: data.title,
      link: `/blog/${slug}/`,
      pubDate: data.date,
    })),
    site: context.site,
    title: site.name,
  })
}
