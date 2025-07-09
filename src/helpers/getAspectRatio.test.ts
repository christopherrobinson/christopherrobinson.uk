describe('getAspectRatio', () => {
  it('should calculate the aspect ratio correctly for 16:9', () => {
    expect(getAspectRatio(1920, 1080)).toBe('16:9');
  });

  it('should calculate the aspect ratio correctly for 4:3', () => {
    expect(getAspectRatio(1024, 768)).toBe('4:3');
  });

  it('should calculate the aspect ratio correctly for 1:1', () => {
    expect(getAspectRatio(100, 100)).toBe('1:1');
  });
});
