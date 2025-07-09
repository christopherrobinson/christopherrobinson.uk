describe('convertToRem', () => {
  it('should convert px to rem correctly', () => {
    expect(convertToRem(16, 32)).toBe(2);
  });

  it('should handle zero pxValue', () => {
    expect(convertToRem(16, 0)).toBe(0);
  });

  it('should handle different base font sizes', () => {
    expect(convertToRem(10, 20)).toBe(2);
  });
});
