import React, { useState, type ReactNode } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState<string>("");
  const [actived, setActived] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ search, setSearch, actived, setActived }}>
      {children}
    </SearchContext.Provider>
  );
}
