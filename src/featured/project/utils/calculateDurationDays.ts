export function calculateDurationDays(
    createdAt: string, finishedAt: string
): number {
  const [startYear, startMonth, startDay] = createdAt.split('-').map(Number);
  const [endYear, endMonth, endDay] = finishedAt.split('-').map(Number);
  const startDate = Date.UTC(startYear, startMonth - 1, startDay);
  const finishDate = Date.UTC(endYear, endMonth - 1, endDay);
  const daysDiff = Math.ceil((finishDate - startDate) / (1000 * 60 * 60 * 24));

  return startDate > finishDate || !finishDate ? 0 : daysDiff;
};