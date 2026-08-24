import { createContext } from "react";

export type SearchContextType = {
    search: string,
    setSearch: (url: string) => void,
    actived: boolean,
    setActived: (b: boolean) => void,
};

export const SearchContext = createContext<SearchContextType | undefined>(undefined);