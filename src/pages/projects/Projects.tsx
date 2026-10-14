import React from "react";
import { useProject } from "../../featured/project/hooks/useProject";
import { useTable } from "../../featured/project/components/table/hooks/useTable";
import { useMetrics } from "../../featured/project/metrics/hooks/useMetrics";
import BasePieChart from "../../shared/components/charts/pie-chart/components/BasePieChart";
import RenderPieSliceLabel from "../../shared/components/charts/pie-chart/components/RenderPieSliceLabel";
import Table from "../../featured/project/components/table/components/Table";

//import styles from "./Projects.module.css";

export default function Projects() {
  const { filteredProjects, totalProjects, projects } = useProject();

  const {
    handleTableMode,
    handleChange,
    handleClick,
    handleSubmit,
    mode,
    countPriority,
    countStatus,
    editProject, 
    handleClickDropdown, 
    openId, 
    editTableIds 
  } = useTable();

  const { statusMetrics, priorityMetrics } = useMetrics();

  return (
    <section className="@container flex flex-col border-8">
      <article className="@container over-x-flow border-4">
            <Table
              onChange={handleChange}
              onClick={handleClick}
              display='filter'
              mode={mode}
              countStatus={countStatus}
              countPriority={countPriority}
              projects={projects}
              editTableIds={editTableIds}
              handleClickDropdown={handleClickDropdown}
              openId={openId}
            />
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

          {mode === "edit"  ? (
            <>
              <form className="flex justify-around" onSubmit={handleSubmit}>
                <button className="border px-5" type="submit">
                  Salvar
                </button>

                <button
                  type="button"
                  className="border px-5"
                  onClick={() => handleTableMode("view")}
                >
                  Cancelar
                </button>
              </form>
            </>
          ) : mode === "remove"  ? (
            <>
              <form className="flex justify-around" onSubmit={handleSubmit}>
                <button type="submit" className="border px-5">
                  Confirmar
                </button>

                <button
                  className="border px-5"
                  type="button"
                  onClick={() => handleTableMode("view")}
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
                onClick={() => handleTableMode("edit")}
              >
                Editar
              </button>
              <button
                type="button"
                className="border px-5"
                onClick={() => handleTableMode("remove")}
              >
                Excluir
              </button>
            </>
          )}
        </div>

          <Table
            onChange={handleChange}
            onClick={handleClick}
            display='project'
            mode={mode}
            countStatus={countStatus}
            countPriority={countPriority}
            projects={editProject}
            editTableIds={editTableIds}
            handleClickDropdown={handleClickDropdown}
            openId={openId}
          />
      </article>

      <article className="@container flex flex-row flex-wrap justify-around border-4 m-5">
        <div className="flex flex-col border-2">
          <label htmlFor="">Status de Tarefas (Tabela)</label>
          
            <Table
              onChange={handleChange}
              onClick={handleClick}
              display='status'
              mode={mode}
              countStatus={countStatus}
              countPriority={countPriority}
              projects={projects}
              editTableIds={editTableIds}
              handleClickDropdown={handleClickDropdown}
              openId={openId}
            />
          
        </div>

        <div className="flex flex-col border-2">
          <label htmlFor="">Prioridade de Tarefas (tabela)</label>
          
            <Table
              onChange={handleChange}
              onClick={handleClick}
              display='priority'
              mode={mode}
              countStatus={countStatus}
              countPriority={countPriority}
              projects={projects}
              editTableIds={editTableIds}
              handleClickDropdown={handleClickDropdown}
              openId={openId}
            />
          
        </div>
      </article>
    </section>
  );
}
