import React from "react";
// import styles from "./Sidebar.module.css";
import { Link } from "react-router";
import { usePage } from "../../../../featured/page/hooks/usePage";
import { useSearch } from "../../../../featured/project/search/hooks/useSearch";

export default function Sidebar() {
  const { handleHeading } = usePage();
  const { toggleSearch } = useSearch();

  return (
    <aside className="flex flex-col p-12 bg-purple-700 h-full">
      <article className="bg-purple-600">
        <image>Image</image>
      </article>

      <article className="flex flex-col py-12 bg-purple-600">
        <nav>
          <ul>
            <li
              onClick={() => toggleSearch(false)}
              className="py-5 bg-purple-500"
            >
              <Link to="/" onClick={() => handleHeading("Dashboard")}>
                Dashboard
              </Link>
            </li>
            <li
              onClick={() => toggleSearch(false)}
              className="py-5 bg-purple-500"
            >
              <Link to="/projects" onClick={() => handleHeading("Projetos")}>
                Projetos
              </Link>
            </li>
            <li
              onClick={() => toggleSearch(false)}
              className="py-5 bg-purple-500"
            >
              <Link to="/clients" onClick={() => handleHeading("Clientes")}>
                Clientes
              </Link>
            </li>
          </ul>
        </nav>
      </article>
    </aside>
  );
}
