import { stages } from "../constants/stages.ts";
import { technologies } from "../constants/technologies.ts";

export type StageType = typeof stages[number]['id'];
export type TechnologyType = typeof technologies[number]['id'];

export type Project = {
    id: string;
    userId: string;
    name: string;
    client: string;
    priority: "high" | "medium" | "low";
    status: "planning" | "running" | "conclued";
    duration: number;
    tech: TechnologyType[];
    createdAt: string;
    finishedAt: string;
    description: string;
    progress: number;
    stage: StageType;
    logo: File | null;
};