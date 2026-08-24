import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function useSearch() {
  const context = useContext(SearchContext);
  const navigate = useNavigate();

  if (!context) {
    throw new Error("useSearch precisa estar dentro do SearchProvider");
  }

  const { search, setActived } = context;

  function toggleSearch(b: boolean) {
    setActived(b);

    if (b) {
      navigate(`/projects?q=${encodeURIComponent(search)}`);
    }
  }

  return { toggleSearch, ...context };
}
