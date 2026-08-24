import {
  formatPercentageLabel,
  percentage,
} from "../../../../../featured/project/metrics/utils/formatters";
import { getMetric } from "../../../../../featured/project/metrics/selectors";
import type { PieCenterLabelProps } from "../types/pieChart";

export default function RenderPieCenterLabel({
  data,
  totalProjects,
  viewBox,
}: PieCenterLabelProps) {
  if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox)) {
    return null;
  }

  const cx = Number(viewBox?.cx ?? 0);
  const completedMetric = getMetric(data, "Concluído");
  const completed = completedMetric?.value ?? 0;
  const percentageCompleted = percentage(completed, totalProjects);

  const fillColor =
    percentageCompleted >= 75
      ? getMetric(data, "Concluído")
      : percentageCompleted >= 35
        ? getMetric(data, "Em Andamento")
        : getMetric(data, "Planejamento");

  return (
    <text
      x={cx}
      y={250}
      textAnchor="middle"
      dominantBaseline="middle"
      fill={fillColor?.color}
      fontSize={25}
      fontWeight="bold"
    >
      <tspan x={cx}>{formatPercentageLabel(completed, totalProjects)}</tspan>

      <tspan x={cx} dy="24">
        Concluído
      </tspan>
    </text>
  );
}
