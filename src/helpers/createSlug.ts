export const createSlug = (title: string): string => (
  title
    .trim()                         // remove leading & trailing whitespace
    .replace(/[^A-Za-z0-9 ]/g, '')  // remove special characters
    .replace(/\s+/g, '-')           // replace spaces
    .replace(/^-+|-+$/g, '')        // remove leading & trailing separators
    .toLowerCase()                  // output lowercase
);
