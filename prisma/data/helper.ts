export const generateTotal = <T>(
  amount: number,
  fn: (element: unknown, index: number) => T
): T[] => Array.from({ length: amount }, fn);
