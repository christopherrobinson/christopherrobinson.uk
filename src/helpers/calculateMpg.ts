export const calculateMpg = (litres: number, miles: number): string => {
  if ((litres === 0) || (miles === 0)) {
    return '0.0';
  }

  return ((miles / litres) * 4.546).toLocaleString('en-gb', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
};
