import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";

export function usePage() {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("usePage precisa estar dentro do PageProvider");
  }

  const { titlePage, setTitlePage } = context;

  function handleHeading(name: string) {
    setTitlePage(name);
  }

  return { titlePage, handleHeading };
}
