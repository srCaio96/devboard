import { useMemo } from "react";
import { useProject } from "../../hooks/useProject";
import { selectMetrics } from "../selectors";
import { percentage } from "../utils/formatters";

export function useMetrics() {
  const { projects } = useProject();
  const { statusMetrics, priorityMetrics } = useMemo(
    () => selectMetrics(projects),
    [projects],
  );

  return {
    totalProjects: projects.length,
    statusMetrics,
    priorityMetrics,
    percentage,
  };
}
