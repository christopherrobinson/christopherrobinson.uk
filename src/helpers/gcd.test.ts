describe('gcd', () => {
  it('should calculate the greatest common divisor', () => {
    expect(gcd(1920, 1080)).toBe(120);
  });

  it('should handle zero', () => {
    expect(gcd(10, 0)).toBe(10);
  });

  it('should handle prime numbers', () => {
    expect(gcd(17, 13)).toBe(1);
  });
});
