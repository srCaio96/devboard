import { useState, type ReactNode } from "react";
import { PageContext } from "../contexts/PageContext";

export function PageProvider({ children }: { children: ReactNode }) {
  const [titlePage, setTitlePage] = useState<string>("Dashboard");

  return (
    <PageContext.Provider value={{ titlePage, setTitlePage }}>
      {children}
    </PageContext.Provider>
  );
}
