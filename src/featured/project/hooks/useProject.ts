import { useContext, useMemo } from "react";
import { ProjectContext } from "../contexts/ProjectContext";
import { useSearch } from "../search/hooks/useSearch";
export function useProject() {
  const context = useContext(ProjectContext);
  const { search } = useSearch();

  if (!context) {
    throw new Error("useSearch precisa estar dentro do SearchProvider");
  }

  const { projects } = context;
  const totalProjects = projects.length;

  const projectStatus = useMemo(() => {
    let totalEnd: number = 0;
    let totalPending: number = 0;
    let totalRunning: number = 0;

    projects.forEach((project) => {
      if (project.status === "conclued") totalEnd++;
      if (project.status === "running") totalRunning++;
      if (project.status === "planning") totalPending++;
    });

    return [
      {
        name: "Concluído",
        value: totalEnd,
      },
      {
        name: "Em Andamento",
        value: totalRunning,
      },
      {
        name: "Planejamento",
        value: totalPending,
      },
    ];
  }, [projects]);

  const projectPriority = useMemo(() => {
    let totalHigh: number = 0;
    let totalMedium: number = 0;
    let totalLow: number = 0;

    projects.forEach((project) => {
      if (project.priority === "high") totalHigh++;
      if (project.priority === "medium") totalMedium++;
      if (project.priority === "low") totalLow++;
    });

    return [
      {
        name: "Alta",
        value: totalHigh,
      },
      {
        name: "Média",
        value: totalMedium,
      },
      {
        name: "Baixa",
        value: totalLow,
      },
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (!search) return null;

    const filtered = projects.filter((project) => {
      const projectName = project.name.toLocaleLowerCase().includes(search)
        ? project.name.toLocaleLowerCase()
        : "";

      return projectName;
    });

    return filtered;
  }, [projects, search]);

  return {
    totalProjects,
    projectStatus,
    projectPriority,
    filteredProjects,
    ...context,
  };
}
