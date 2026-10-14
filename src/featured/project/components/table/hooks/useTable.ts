import { useState } from "react";
import { useProject } from "../../../hooks/useProject";
import type { Project } from "../../../types/project";

export type TableMode = "view" | "edit" | "remove";
export type TableDisplay = "project" | "status" | "priority" | "filter";

export function useTable() {
  const { alterProject, removeProject, projects } = useProject();

  const [mode, setMode] = useState<TableMode>("view");
  const [editProject, setEditProject] = useState<Project[]>([]);
  const [editTableIds, setEditTableIds] = useState(new Set<string>());

  const countStatus = 0;
  const countPriority = 0;

  function handleTableMode(mode: TableMode) {
    setMode(mode);
    setEditProject(projects);
    setEditTableIds(new Set(""));
  };

  function handleClick(id: string) {
    setEditTableIds((prev) => {
      const newSet = new Set(prev);

      if (editTableIds.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      };

      return newSet;
    });
  };

  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    e.preventDefault();

    const { name, value } = e.target;

    if (mode !== "edit") return;

    setEditProject((prev) =>
      prev.map((project) =>
        project.id === id
          ? {
              ...project,
              [name]: value,
              tech: project.tech.includes(value)
                ? project.tech.filter((item) => item !== value)
                : [...project.tech, value],
            }
          : project,
      ),
    );
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (mode === "edit") {
      for (const p of editProject) {
        if (!editTableIds.has(p.id)) continue;
        await alterProject(p.id, p);
      };

      setMode("view");
    };

    if (mode === "remove") {
      for (const p of editProject) {
        if (!editTableIds.has(p.id)) continue;
        await removeProject(p.id);
      };
      setEditProject(projects);
      setMode("view");
    };
  };

  return {
    mode,
    countPriority,
    countStatus,
    editProject,
    editTableIds,
    handleTableMode,
    handleChange,
    handleSubmit,
    handleClick,
  };
}
