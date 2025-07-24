export interface DefaultLayoutProps {
  heading?: string;
  layout?: {
    footer?: {
      minimal?: boolean;
    };
  };
  meta?: {
    description?: string;
    og?: {
      'image'?: string;
      'image:alt'?: string;
      'image:height'?: number;
      'image:width'?: number;
    };
    robots?: string;
    title?: string;
    twitter?: {
      'card'?: string;
    };
  };
}
