export const estimateRevenue = (views: number, cpm: number = 15): number => {
  return (views / 1000) * cpm;
};
