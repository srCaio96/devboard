import type { priority } from "../constants/priority.ts";
import { stages } from "../constants/stages.ts";
import { status } from "../constants/status.ts";
import { technologies } from "../constants/technologies.ts";

export type StageType = typeof stages[number]['id'];
export type StageProgressType = typeof stages[number]['progress'];
export type StatusType = typeof status[number]['id'];
export type PriorityType = typeof priority[number]['id'];
export type TechnologyType = typeof technologies[number]['id'];

export interface Project {
    id: string;
    userId: string;
    name: string;
    client: string;
    priority: PriorityType;
    status: StatusType;
    duration: number;
    tech: TechnologyType[];
    createdAt: string;
    finishedAt: string;
    description: string;
    progress: StageProgressType | undefined;
    stage: StageType;
    logo: File | string;
};