export const createSlug = (input: string | undefined | null): string => {
  if (typeof input !== 'string' || !input.trim()) {
    return '';
  }

  return input
    .trim()
    .replace(/[’‘]/g, "'")           // normalise apostrophes
    .replace(/[“”]/g, '"')           // normalise quotes
    .normalize('NFD')                // split accented letters
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics
    .replace(/&/g, 'and')            // & to 'and'
    .replace(/[™©®]/g, '')           // remove special symbols
    .replace(/(\w)['’]s\b/g, '$1s')  // e.g. cheat's → cheats
    .replace(/\s+/g, ' ')            // collapse whitespace
    .toLowerCase()                   // convert to lowercase
    .replace(/[^a-z0-9]+/g, '-')     // non-alphanum to hyphen
    .replace(/^-+|-+$/g, '');        // trim leading/trailing hyphens
};
