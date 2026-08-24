import { Sector } from "recharts";
import {
  useActiveTooltipDataPoints,
  type PieSectorShapeProps,
  useIsTooltipActive,
} from "recharts";
import { adjustColor } from "../../../../utils/adjustColor";

export default function CustomPieSector({ ...props }: PieSectorShapeProps) {
  const activePayload = useActiveTooltipDataPoints();
  const isPieActive = useIsTooltipActive();
  const isCurrentSectorActive =
    isPieActive && props.payload === activePayload?.[0];
  const hoverDark =
    !isCurrentSectorActive && isPieActive
      ? adjustColor(props.payload.color, 20)
      : props.payload.color;

  return (
    <Sector
      {...props}
      fill={hoverDark}
      stroke={hoverDark}
      style={{
        transition: "fill .3s ease, stroke .3s ease",
      }}
    />
  );
}
