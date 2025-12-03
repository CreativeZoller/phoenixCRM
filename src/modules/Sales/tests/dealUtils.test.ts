import { calculateTotalPipelineValue } from '../lib/dealUtils';

// Mock deal structure for testing
interface MockDeal {
  value: number;
}

describe('Sales Utility Functions', () => {
  it('should correctly calculate the total value of the pipeline from multiple deals', () => {
    const deals: MockDeal[] = [{ value: 1000.5 }, { value: 500.0 }, { value: 250.75 }];
    // Expected result: 1751.25
    expect(calculateTotalPipelineValue(deals)).toBeCloseTo(1751.25);
  });

  it('should return 0 for an empty array', () => {
    const deals: MockDeal[] = [];
    expect(calculateTotalPipelineValue(deals)).toBe(0);
  });

  it('should handle deals with zero value correctly', () => {
    const deals: MockDeal[] = [{ value: 100 }, { value: 0 }, { value: 50 }];
    expect(calculateTotalPipelineValue(deals)).toBe(150);
  });

  it('should return 0 when input is null or undefined', () => {
    // @ts-expect-ignore: testing invalid input for robustness
    expect(calculateTotalPipelineValue(null)).toBe(0);
    // @ts-expect-ignore: testing invalid input for robustness
    expect(calculateTotalPipelineValue(undefined)).toBe(0);
  });
});
