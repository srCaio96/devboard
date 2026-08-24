import { type PieLabel } from "recharts";
import type { LabelContentType } from "recharts/types/component/Label";
import type { MetricItem } from "../../../../../featured/project/metrics/types/metrics";
import type { LabelProps, PieLabelRenderProps } from "recharts";

export type PieCenterLabelProps = Pick<LabelProps, "viewBox"> & {
  data: MetricItem[];
  totalProjects: number;
};

export type PieSliceLabelProps = PieLabelRenderProps & {
  totalProjects: number;
};

export type BasePieChartProps = {
  data: MetricItem[];
  cx?: string | number;
  cy?: string | number;
  innerRadius: string | number;
  outerRadius: string | number;
  startAngle: number;
  endAngle: number;
  cornerRadius?: string | number;
  paddingAngle?: number;
  centerLabel?: LabelContentType;
  sliceLabel?: PieLabel;
};
