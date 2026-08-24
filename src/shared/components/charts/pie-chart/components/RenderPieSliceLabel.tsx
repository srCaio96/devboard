import { formatPercentageLabel } from "../../../../../featured/project/metrics/utils/formatters";
import { getPieLabelPosition } from "../utils/getPieLabelPosition";
import type { PieSliceLabelProps } from "../types/pieChart";

export default function RenderPieSliceLabel({
  cx,
  cy,
  innerRadius,
  outerRadius,
  midAngle,
  value,
  totalProjects,
}: PieSliceLabelProps) {
  if (
    cx == null ||
    cy == null ||
    innerRadius == null ||
    outerRadius == null ||
    midAngle == null
  ) {
    return null;
  }
  const { x, y } = getPieLabelPosition(
    cx,
    cy,
    innerRadius,
    outerRadius,
    midAngle,
  );

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#ffffff"
      fontSize={18}
      fontWeight={700}
    >
      {formatPercentageLabel(Number(value), totalProjects)}
    </text>
  );
}
