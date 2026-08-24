import type { LegendPayload } from "recharts";
import type { MetricItem } from "../../../../featured/project/metrics/types/metrics";

export type CustomLegendProps = {
  value?: string;
  payload?: readonly LegendPayload[];
};
//export default function CustomLegend({payload}: Pick<LegendProps, 'payload'>) {
export default function CustomLegend({ payload }: CustomLegendProps) {
  if (!payload?.length) return null;

  return (
    <div className="flex justify-center flex-wrap gap-2">
      {payload?.map((item) => {
        const metric = item.payload as MetricItem;

        return (
          <div key={metric.name}>
            <div className="flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full"
                style={{ background: metric.color }}
              />
              <span className="font-bold" style={{ color: metric.color }}>
                {metric.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
