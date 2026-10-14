import React from "react";
import type { TableDisplay, TableMode } from "../hooks/useTable";
import { formatDate } from "../../../../../shared/utils/formatDate";
import { useMetrics } from "../../../metrics/hooks/useMetrics";
import { stages } from "../../../constants/stages";
import { status } from "../../../constants/status";
import { priority } from "../../../constants/priority";
import TableEdit from "./TableEdit";
import type { Project } from "../../../types/project";

type TableProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onClick: (id: string) => void;
  handleClickDropdown: (id: string) => void;

  editTableIds: Set<string>;
  openId: Set<string>;
  mode: TableMode;
  display: TableDisplay;
  countStatus: number;
  countPriority: number;
  projects: Project[];
};

export default function Table({
  onChange,
  onClick,
  mode,
  display,
  projects,
  editTableIds,
  handleClickDropdown,
  openId
}: TableProps) {

  const { 
    statusMetrics, 
    priorityMetrics, 
    percentage, 
    totalProjects 
  } = useMetrics();

  return (
    <table className="table-auto border-collapse w-full">
      <thead className="table-header-group border">
        <tr className="border p-2">
          {(display === "project" || display === "filter") && (
            <th className="border p-2">Nome</th>
          )}
          {display === "project" && (
            <>
              <th className="border p-2">Tech</th>
              <th className="border p-2">Cliente</th>
            </>
          )}
          {(display === "project" || display === "filter") && (
            <th className="border p-2">Inicio Data</th>
          )}
          {display === "project" && (
            <>
              <th className="border p-2">Fim Data</th>
              <th className="border p-2">Duração (em dias)</th>
            </>
          )}
          {(display === "project" ||
            display === "filter" ||
            display === "status") && <th className="border p-2">Status</th>}
          {(display === "project" || display === "priority") && (
            <th className="border p-2">Prioridades</th>
          )}
          {(display === "status" || display === "priority") && (
            <>
              <th className="border p-2">Count</th>
              <th className="border p-2">%</th>
            </>
          )}
          {display === "project" && <th className="border p-2">Estágio</th>}
          {(display === "project" || display === "filter") && (
            <th className="border p-2">% Completo</th>
          )}
          {display === "project" && <th className="border p-2">Descrição</th>}
        </tr>
      </thead>

      <tbody>
        {mode === "view" || display === "filter" ? (
          <>
            {projects.map((p) => {
              const currentStage = stages.find((item) => item.id === p?.stage);
              const currentStatus = status.find(
                (item) => item.id === p?.status,
              );
              const currentPriority = priority.find(
                (item) => item.id === p?.priority,
              );

              return (
                <tr className="border p-2" key={p.id}>
                  {(display === "project" || display === "filter") && (
                    <td className="border p-2">{p.name}</td>
                  )}
                  {display === "project" && (
                    <td className="border p-2">{p.tech.toString()}</td>
                  )}
                  {display === "project" && (
                    <td className="border p-2">{p.client ? p.client : "?"}</td>
                  )}
                  {(display === "project" || display === "filter") && (
                    <td className="border p-2">{formatDate(p.createdAt)}</td>
                  )}
                  {display === "project" && (
                    <td className="border p-2">
                      {p.finishedAt ? formatDate(p.finishedAt) : "?"}
                    </td>
                  )}
                  {display === "project" && (
                    <td className="border p-2">{p.duration}</td>
                  )}
                  {(display === "project" ||
                    display === "status" ||
                    display === "filter") && (
                    <td className="border p-2">{currentStatus?.label}</td>
                  )}
                  {(display === "project" || display === "priority") && (
                    <td className="border p-2">{currentPriority?.label}</td>
                  )}
                  {display === "project" && (
                    <td className="border p-2">{currentStage?.label}</td>
                  )}
                  {(display === "project" || display === "filter") && (
                    <td className="border p-2">{currentStage?.progress}%</td>
                  )}
                  {display === "project" && (
                    <td className="border p-2">
                      {p.description ? p.description : "?"}
                    </td>
                  )}
                </tr>
              );
            })}
          </>
        ) : display === "status" ? (
          status.map((s) => {
            const statusCount = statusMetrics.find((item) => item.id === s.id);

            const statusPercentage = percentage(
              Number(statusCount?.value),
              totalProjects,
            );

            return (
              <tr key={s.id}>
                <td>{s.label}</td>
                <td>{statusCount?.value}</td>
                <td>{statusPercentage}%</td>
              </tr>
            );
          })
        ) : display === "priority" ? (
          priority.map((p) => {
            const priorityCount = priorityMetrics.find(
              (item) => item.id === p.id,
            );

            const priorityPercentage = percentage(
              Number(priorityCount?.value),
              totalProjects,
            );

            return (
              <tr key={p.id}>
                <td>{p.label}</td>
                <td>{priorityCount?.value}</td>
                <td>{priorityPercentage}%</td>
              </tr>
            );
          })
        ) : (
          <TableEdit
            mode={mode}
            onChange={onChange}
            onClick={onClick}
            editProject={projects}
          />
        )}
      </tbody>
    </table>
  );
}
