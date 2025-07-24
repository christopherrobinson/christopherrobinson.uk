export interface BlogPostCardProps {
  cover?: ImageMetadata;
  date: Date;
  excerpt: string;
  id: string;
  readingTime: {
    minutes: number;
  };
  title: string;
}
