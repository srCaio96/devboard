import { createContext } from "react";
import type { Project } from "../types/project";
import type { CreateProjectDTO, UpdtateProjectDTO } from "../types/dto";

type ProjectContextType = {
  projects: Project[];
  loading: boolean;
  addProject: (project: CreateProjectDTO) => Promise<void>;
  alterProject: (id: string, project: UpdtateProjectDTO) => Promise<void>;
  removeProject: (id: string) => Promise<void>;
};

export const ProjectContext = createContext<ProjectContextType | null>(null);
