export const calculateMpg = (litres: number, miles: number): string => ((miles / litres) * 4.544).toLocaleString('en-gb', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
