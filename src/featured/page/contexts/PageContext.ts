import { createContext} from "react";

type PageContextType = {
    titlePage: string;
    setTitlePage: (name: string) => void;
};

export const PageContext = createContext<PageContextType | undefined>(undefined);