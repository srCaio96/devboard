export type Technology = {
  id: string;
  name: string;
  type: "language"
    | "framework"
    | "library"
    | "runtime"
    | "database"
    | "cloud"
    | "tool"
    | "style"
    | "markup";
  area: "frontend" 
    | "backend" 
    | "devops" 
    | "general";
};