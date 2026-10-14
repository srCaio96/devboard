import React, { useState, useEffect, type ReactNode } from "react";
import { createProject, getProjects, updateProject, deleteProject } from "../services/projectsService";
import { uploadImage } from "../services/uploadService.ts";
import { useAuth } from "../../auth/hooks/useAuth.ts";
import { ProjectContext } from "../contexts/ProjectContext.ts";
import type { Project } from "../types/project.ts";
import type { CreateProjectDTO, UpdateProjectDTO } from "../types/dto.ts";
import { calculateDurationDays } from "../utils/calculateDurationDays.ts";
import { stages } from "../constants/stages.ts";

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useAuth();

  useEffect(() => {
    async function fetchProjects() {
      try {
        if (!user) {
          setProjects([]);
          return;
        };

        const data = await getProjects(user.uid);

        setProjects(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      };
    };

    fetchProjects();
  }, [user]);

  async function addProject(project: CreateProjectDTO) {
    if (!user) {
      throw new Error("Usuário não autenticado");
    };

    if (!project.logo) {
      throw new Error("Logo do projeto não fornecida");
    };

    setLoading(true);

    try {
      const imageUrl = 
        project.logo instanceof File ? 
        await uploadImage(project.logo) : 
        project.logo;

      const duration = calculateDurationDays(
        project.createdAt, project.finishedAt
      );
      
      const projectData = {
        ...project,
        logo: imageUrl,
        userId: user.uid,
        duration,
        progress: stages.find(s => s.id === project.stage)?.progress ,
      };

      const docRef = await createProject(projectData);

      const newProject: Project = {
        id: docRef.id,
        ...projectData,
      };
      
      setProjects((prev) => [...prev, newProject]);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    };
  };

  async function alterProject(id: string, data: UpdateProjectDTO) {
    setLoading(true);
    
    try {
      await updateProject(id, data);
      
      setProjects(prev =>
        prev.map(project => project.id === id 
          ? {...project, ...data} 
          : project
        )
      );
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    };
  };

  async function removeProject(id: string) {
    setLoading(true);

    try {
      await deleteProject(id);

      setProjects(prev => prev.filter(project => project.id !== id));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    };
  };

  return (
    <ProjectContext.Provider
      value={{ projects, loading, addProject, alterProject, removeProject}}
    >
      {children}
    </ProjectContext.Provider>
  );
};
