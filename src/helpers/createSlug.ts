export const createSlug = (title: string) => (
  title
    .trim()                         // remove leading & trailing whitespace
    .replace(/[^A-Za-z0-9 ]/g, '')  // remove special characters
    .replace(/\s+/g, '-')           // replace spaces
    .replace(/^-+|-+$/g, '')        // remove leading & trailing separtors
    .toLowerCase()                  // output lowercase
)
