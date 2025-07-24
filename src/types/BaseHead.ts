export interface BaseHeadProps {
  description?: string;
  og?: {
    'description'?: string;
    'image'?: string;
    'image:alt'?: string;
    'image:height'?: number;
    'image:width'?: number;
    'locale'?: string;
    'title'?: string;
  };
  robots?: string
  title?: string;
  twitter?: {
    card?: string;
  };
}
