import React from "react";

import { formatDate } from "../../../../shared/utils/formatDate";
import type { Project } from "../../types/project";
import { useProject } from "../../hooks/useProject";

type TableProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onClick: (id: string) => void;
  mode: "view" | "edit" | "remove";
  editProject: Project[];
  editTableIds: Set<string>;
};
export default function Table({
  onChange,
  onClick,
  mode,
  editProject,
  editTableIds,
}: TableProps) {
  const { projects } = useProject();

  return (
    <table className="table-auto border-collapse w-full">
      <thead className="table-header-group border">
        <tr className="border p-2">
          <th className="border p-2">Nome</th>
          <th className="border p-2">Tech</th>
          <th className="border p-2">Cliente</th>
          <th className="border p-2">Inicio Data</th>
          <th className="border p-2">Fim Data</th>
          <th className="border p-2">Duração (em dias)</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Prioridades</th>
          <th className="border p-2">Estágio</th>
          <th className="border p-2">Descrição</th>
        </tr>
      </thead>

      <tbody>
        {mode === "view" ? (
          <>
            {projects.map((p) =>  (
              <tr className="border p-2" key={p.id}>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.tech}</td>
                <td className="border p-2">{p.client}</td>
                <td className="border p-2">{formatDate(p.createdAt)}</td>
                <td className="border p-2">{formatDate(p.finishedAt)}</td>
                <td className="border p-2">{p.duration}</td>
                <td className="border p-2">{p.status}</td>
                <td className="border p-2">{p.priority}</td>
                <td className="border p-2">{p.stage}</td>
                <td className="border p-2">{p.description}</td>
              </tr>
            ))}
          </>
        ) : (
          <>
            {editProject.map((p) => {
              const editAble = editTableIds.has(p.id);
              console.log(p.stage)
              return (
                <tr className="border p-2" key={p.id}>
                  <td className="flex">
                    {mode === "edit" ? (
                      <button className="" onClick={() => onClick(p.id)}>
                        [V]
                      </button>
                    ) : mode === "remove" ? (
                      <button className="" onClick={() => onClick(p.id)}>
                        [X]
                      </button>
                    ) : (
                      ""
                    )}

                    <input
                      type="text"
                      className="border p-2"
                      name="name"
                      onChange={(e) => onChange(e, p.id)}
                      disabled={!editAble}
                      value={p.name}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      className="border p-2"
                      name="tech"
                      onChange={(e) => onChange(e, p.id)}
                      disabled={!editAble}
                      value={p.tech}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      className="border p-2"
                      name="client"
                      onChange={(e) => onChange(e, p.id)}
                      disabled={!editAble}
                      value={p.client}
                    />
                  </td>
                  {!editAble || mode === 'remove' ? (
                    <>
                      <td>
                        <input
                          type="text"
                          className="border p-2"
                          name="createdAt"
                          
                          onChange={(e) => onChange(e, p.id)}
                          disabled
                          value={formatDate(p.createdAt)}
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          className="border p-2"
                          name="finishedAt"
                          
                          onChange={(e) => onChange(e, p.id)}
                          disabled
                          value={formatDate(p.finishedAt)}
                        />
                      </td>
                    </>
                    ) : (
                    <>
                      <td>
                      <input
                        type="date"
                        className="border p-2"
                        name="createdAt"
                        value={formatDate(p.createdAt)}
                        onChange={(e) => onChange(e, p.id)}
                        disabled={!editAble}
                      />
                    </td>

                    <td>
                      <input
                        type="date"
                        className="border p-2"
                        name="finishedAt"
                        value={formatDate(p.finishedAt)}
                        onChange={(e) => onChange(e, p.id)}
                        disabled={!editAble}
                      />
                    </td>
                  </>
                  )}

                  <td>
                    <input
                      type="number"
                      className="border p-2"
                      name="duration"
                      disabled
                      value={p.duration}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      className="border p-2"
                      name="status"
                      onChange={(e) => onChange(e, p.id)}
                      disabled={!editAble}
                      value={p.status}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      className="border p-2"
                      name="priority"
                      onChange={(e) => onChange(e, p.id)}
                      disabled={!editAble}
                      value={p.priority}
                    />
                  </td>

                  <td>
                    <input
                      type="text"
                      className="border p-2"
                      name="description"
                      onChange={(e) => onChange(e, p.id)}
                      disabled={!editAble}
                      value={p.description}
                    />
                  </td>
                </tr>
              );
            })}
          </>
        )}
      </tbody>
    </table>
  );
}
