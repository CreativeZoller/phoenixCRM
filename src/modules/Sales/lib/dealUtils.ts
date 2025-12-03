/**
 * Calculates the total value of all deals in a given list.
 * @param deals Array of deal objects (mocked type).
 * @returns The total monetary value.
 */
export const calculateTotalPipelineValue = (deals: Array<{ value: number }>): number => {
  if (!deals || deals.length === 0) return 0;
  return deals.reduce((total, deal) => total + deal.value, 0);
};
