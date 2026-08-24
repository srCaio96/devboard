export function getPieLabelPosition(
    cx: number,
    cy: number,
    innerRadius: number,
    outerRadius: number,
    midAngle: number
) {
    const RADIAN = Math.PI / 180;

    const radius =
        innerRadius + (outerRadius - innerRadius) * 0.5;

    const x =
        cx + radius * Math.cos(-midAngle * RADIAN);

    const y =
        cy + radius * Math.sin(-midAngle * RADIAN);

    return { x, y };
}