describe('calculateMpg', () => {
  it('should calculate MPG correctly', () => {
    expect(calculateMpg(50, 400)).toBe('36.4');
  });

  it('should handle zero litres', () => {
    expect(calculateMpg(0, 400)).toBe('0.0');
  });

  it('should handle zero miles', () => {
    expect(calculateMpg(50, 0)).toBe('0.0');
  });
});
