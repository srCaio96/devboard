import React from "react";
//import styles from "./Header.module.css";
import { usePage } from "../../../featured/page/hooks/usePage";
import { useSearch } from "../../../featured/project/search/hooks/useSearch";
import { useAuth } from "../../../featured/auth/hooks/useAuth";

export default function Header() {
  const { titlePage } = usePage();
  const { search, setSearch, toggleSearch, actived } = useSearch();
  const { user } = useAuth();
  const { logIn, logOut } = useAuth();

  return (
    <header className="@container flex flex-row min-w-full p-12 flex-wrap-reverse justify-between bg-yellow-400">
      <h2 className="flex-grow-3 bg-yellow-300">
        {actived ? "Projetos" : titlePage}
      </h2>

      <input
        className="flex flex-grow-7 bg-yellow-300"
        type="search"
        name="search"
        placeholder="Pesquisar Projetos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && toggleSearch(true)}
      />

      <div className="flex flex-column flex-grow-3  bg-yellow-300">
        {!user ? (
          <div>
            <span className="bg-yellow-200">Login (imagem)</span>
            <button className="border" onClick={logIn}>
              Entrar com Google
            </button>
          </div>
        ) : (
          <div>
            <p>Bem vindo: {user.displayName}</p>
            <button className="border" onClick={logOut}>
              Sair
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
