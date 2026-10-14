import type { Project } from "../types/project";
import type { MetricItem } from "./types/metrics";

export type ProjectStatus = Project["status"];

export function selectMetrics(projects: Project[]) {
  const statusMap: Record<ProjectStatus, number> = {
    conclued: 0,
    running: 0,
    planning: 0,
  };

  const priorityMap: Record<Project["priority"], number> = {
    high: 0,
    medium: 0,
    low: 0,
  };

  for (const project of projects) {
    statusMap[project.status]++;
    priorityMap[project.priority]++;
  }

  const statusMetrics: MetricItem[] = [
    {
      id: "conclued",
      name: "Concluído",
      value: statusMap.conclued,
      color: "#008002",
    },
    {
      id: "running",
      name: "Em Andamento",
      value: statusMap.running,
      color: "#3F8340",
    },
    { 
      id: "planning",
      name: "Planejamento",
      value: statusMap.planning,
      color: "#808080",
    },
  ];

  const priorityMetrics: MetricItem[] = [
    {
      id: "high",
      name: "Alta",
      value: priorityMap.high,
      color: "#FF4500",
    },
    {
      id: "medium",
      name: "Média",
      value: priorityMap.medium,
      color: "#FFA500",
    },
    {
      id: "low",
      name: "Baixa",
      value: priorityMap.low,
      color: "#32CD32",
    },
  ];

  return { statusMetrics, priorityMetrics };
}

export function getMetric(metrics: MetricItem[], name: string) {
  return metrics.find((item) => item.name === name);
}
