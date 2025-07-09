describe('createSlug', () => {
  it('should create a basic slug', () => {
    expect(createSlug('Hello World')).toBe('hello-world');
  });

  it('should handle extra whitespace', () => {
    expect(createSlug('  Another Post  ')).toBe('another-post');
  });

  it('should handle the ampersand character', () => {
    expect(createSlug('Fish & Chips')).toBe('fish-and-chips');
  });

  it('should strip other special characters', () => {
    expect(createSlug('A post with special characters!@#$%^*()')).toBe('a-post-with-special-characters');
  });

  it('should handle apostrophes', () => {
    expect(createSlug("It’s a cheat's life")).toBe('its-a-cheats-life');
  });

  it('should handle accented characters', () => {
    expect(createSlug('Crème Brûlée')).toBe('creme-brulee');
  });

  it('should return an empty string for null or undefined input', () => {
    expect(createSlug(null)).toBe('');
    expect(createSlug(undefined)).toBe('');
  });
});
