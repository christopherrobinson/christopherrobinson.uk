export const getPagination = (current: number, total: number): (number | string)[] => {
  const delta: (number) = 1;
  const range: (number | string)[] = [];
  const rangeWithDots: (number | string)[] = [];
  let l: number | null = null;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      range.push(i);
    }
  }

  for (const i of range) {
    if (l !== null) {
      if (typeof i === 'number' && i - l === 2) {
        rangeWithDots.push(l + 1);
      }
      else if (typeof i === 'number' && i - l > 2) {
        rangeWithDots.push('...');
      }
    }

    rangeWithDots.push(i);

    l = typeof i === 'number' ? i : l;
  }

  return rangeWithDots;
}
