import { type Project } from "./project";


export type CreateProjectDTO = Omit<Project, 'id' 
  | 'userId' 
  | 'duration' 
  | 'progress'>;



export type UpdateProjectDTO = 
  Partial<Omit<Project, 
  | 'userId' 
  | 'duration'>>;
   