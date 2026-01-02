export const riskManager = {
  calculatePositionSize: (accountSize: number, riskPercent: number, stopLoss: number) => {
    return (accountSize * (riskPercent / 100)) / stopLoss;
  },

  calculateRiskAmount: (accountSize: number, riskPercent: number) => {
    return accountSize * (riskPercent / 100);
  },

  isWithinRiskLimits: (currentRisk: number, maxRisk: number) => {
    return currentRisk <= maxRisk;
  }
};

export const isDailyLossLimitReached = (dailyLoss: number, limit: number) => {
  return dailyLoss >= limit;
};

export default riskManager;
