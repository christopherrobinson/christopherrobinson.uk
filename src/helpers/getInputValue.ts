import type { ChangeEvent } from 'react';

export const getInputValue = (
  e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
): any => e.currentTarget.value;
