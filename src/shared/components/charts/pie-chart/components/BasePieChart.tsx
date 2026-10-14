import {
  Pie,
  PieChart,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import CustomTooltip from "../../common/CustomTooltip";
import { useMetrics } from "../../../../../featured/project/metrics/hooks/useMetrics";
import CustomLegend from "../../common/CustomLegend";
import type { BasePieChartProps } from "../types/pieChart";
import CustomPieSector from "./CustomPieSector";

export default function BasePieChart({
  cx,
  cy,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  cornerRadius,
  paddingAngle,
  data,
  sliceLabel,
  centerLabel,
}: BasePieChartProps) {
  const { totalProjects } = useMetrics();

  return (
    <div className="w-full max-w-xl">
      <ResponsiveContainer width="100%" aspect={1}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={startAngle}
            endAngle={endAngle}
            isAnimationActive={true}
            cx={cx}
            cy={cy}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            cornerRadius={cornerRadius}
            paddingAngle={paddingAngle}
            shape={(props) => <CustomPieSector {...props} />}
            label={sliceLabel}
            labelLine={false}
          >
            {centerLabel && <Label content={centerLabel} />}
          </Pie>

          <Legend
            content={(props) => <CustomLegend payload={props.payload} />}
          />
          <Tooltip
            content={(props) => (
              <CustomTooltip {...props} total={totalProjects} />
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
