export const getAspectRatio = (width: number, height: number): string => {
  const divisor = gcd(width, height);

  return `${width / divisor}:${height / divisor}`;
};
