export function percentage(value: number, total: number) {
    if(!total || !value) return 0;
    return total > 0 ? Math.round(((value / total) * 100)) : 0;
};

export function formatPercentageLabel(value: number, total: number) {
    return percentage(value, total) > 0 ? `${percentage(value, total)} %` : ''
};