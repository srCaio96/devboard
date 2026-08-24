import type { TooltipContentProps } from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { formatPercentageLabel } from "../../../../featured/project/metrics/utils/formatters";

export type CustomTooltipProps = TooltipContentProps<ValueType, NameType> & {
  total: number;
};

export default function CustomTooltip({
  active,
  payload,
  total,
}: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const value = Number(payload[0].value ?? 0);
  const percentage = formatPercentageLabel(value, total);

  return (
    <div className="bg-yellow-500 p-5 border border-black rounded">
      <p className="label">{`${payload[0].name}`}</p>
      <p className="value">{`Projetos: ${value}`}</p>
      <p className="percentage">{`Status: ${percentage}`} </p>
    </div>
  );
}
