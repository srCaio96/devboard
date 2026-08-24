import React from "react";
import { useProject } from "../../featured/project/hooks/useProject";
import { useTable } from "../../featured/project/components/table/hooks/useTable";
import { useMetrics } from "../../featured/project/metrics/hooks/useMetrics";

import { formatDate } from "../../shared/utils/formatDate";

import BasePieChart from "../../shared/components/charts/pie-chart/BasePieChart";
import RenderPieSliceLabel from "../../shared/components/charts/pie-chart/components/RenderPieSliceLabel";
import Table from "../../featured/project/components/table/Table";

//import styles from "./Projects.module.css";

export default function Projects() {
  const { filteredProjects, totalProjects } = useProject();

  const {
    handleMode,
    mode,
    handleChange,
    handleClick,
    handleSubmit,
    editProject,
    editTableIds,
  } = useTable();

  const { statusMetrics, priorityMetrics } = useMetrics();

  return (
    <section className="@container flex flex-col border-8">
      <article className="@container over-x-flow border-4">
        <table className="table-auto border-collapse ">
          <thead className="border">
            <tr className="border">
              <td className="border p-2">Nome do Projeto</td>
              <td className="border p-2">Data</td>
              <td className="border p-2">Estatus Projeto</td>
              <td className="border p-2">% Completo</td>
            </tr>
          </thead>

          <tbody>
            {filteredProjects?.map((project) => (
              <tr className="border-2" key={project.id}>
                <td className="border p-2">{project.name ?? "N/A"}</td>
                <td className="border p-2">
                  {formatDate(project.createdAt) ?? "N/A"}
                </td>
                <td className="border p-2">{project.status ?? "N/A"}</td>
                <td className="border p-2">{project.progress ?? "N/A"}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="flex flex-col justify-center border-4 m-5 max-w-full">
        <label>Progresso Projeto %(Gráfico)</label>
        <img src="" alt="" />
        Gráfico
      </article>

      <article className="flex flex-row flex-wrap justify-around border-4 m-5 max-w-full">
        <div className="border-2 w-sm">
          <label>Status de Tarefas %(Gráfico)</label>

          <BasePieChart
            data={statusMetrics}
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            cornerRadius="0%"
            sliceLabel={(props) => (
              <RenderPieSliceLabel {...props} totalProjects={totalProjects} />
            )}
          />
        </div>

        <div className="border-2 w-sm">
          <label>Prioridade de Tarefas %(Gráfico)</label>

          <BasePieChart
            data={priorityMetrics}
            cx="50%"
            cy="50%"
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            cornerRadius="0%"
            sliceLabel={(props) => (
              <RenderPieSliceLabel {...props} totalProjects={totalProjects} />
            )}
          />
        </div>
      </article>

      <article className="@container border-4 m-5 overflow-x-auto">
        <div className="flex justify-around">
          <label htmlFor="">Tabela de Tarefas (Tabela)</label>

          {mode === "edit" ? (
            <>
              <form className="flex justify-around" onSubmit={handleSubmit}>
                <button className="border px-5" type="submit">
                  Salvar
                </button>

                <button
                  type="button"
                  className="border px-5"
                  onClick={() => handleMode("view")}
                >
                  Cancelar
                </button>
              </form>
            </>
          ) : mode === "remove" ? (
            <>
              <form className="flex justify-around" onSubmit={handleSubmit}>
                <button type="submit" className="border px-5">
                  Confirmar
                </button>

                <button
                  className="border px-5"
                  type="button"
                  onClick={() => handleMode("view")}
                >
                  Cancelar
                </button>
              </form>
            </>
          ) : (
            <>
              <button
                type="button"
                className="border px-5"
                onClick={() => handleMode("edit")}
              >
                Editar
              </button>
              <button
                type="button"
                className="border px-5"
                onClick={() => handleMode("remove")}
              >
                Excluir
              </button>
            </>
          )}
        </div>

        {
          <Table
            onChange={handleChange}
            onClick={handleClick}
            mode={mode}
            editProject={editProject}
            editTableIds={editTableIds}
          />
        }
      </article>

      <article className="@container flex flex-row flex-wrap justify-around border-4 m-5">
        <div className="flex flex-col border-2">
          <label htmlFor="">Status de Tarefas (Tabela)</label>
          <table className="border">
            <th>Status</th>
            <th>Count</th>
            <th>%</th>
          </table>
        </div>

        <div className="flex flex-col border-2">
          <label htmlFor="">Prioridade de Tarefas (tabela)</label>
          <table className="border">
            <th>Prioridade</th>
            <th>Count</th>
            <th>%</th>
          </table>
        </div>
      </article>
    </section>
  );
}
