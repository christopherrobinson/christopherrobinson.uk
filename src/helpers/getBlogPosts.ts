import type { GetBlogPostsProps } from '@/types/GetBlogPosts';

let blogCache: any[] | null = null;

export const getBlogPosts = async (options: GetBlogPostsProps = {}) => {
  if (!blogCache) {
    const blogPosts = await getCollection('blog');
    const now = new Date();

    blogCache = blogPosts
      .filter(post => (import.meta.env.MODE === 'production') ? (post.data.date <= now) : true)
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  }

  return (typeof options.limit === 'number') ? blogCache.slice(0, options.limit) : blogCache;
};
