import React from "react";
// import styles from "./Dashboard.module.css";
import Modal from "../../featured/project/components/modal/Modal";
import BasePieChart from "../../shared/components/charts/pie-chart/BasePieChart";
import { useModal } from "../../featured/project/components/modal/hooks/useModal";
import RenderPieCenterLabel from "../../shared/components/charts/pie-chart/components/RenderPieCenterLabel";

import { useProject } from "../../featured/project/hooks/useProject";
import { formatDate } from "../../shared/utils/formatDate";
import { useMetrics } from "../../featured/project/metrics/hooks/useMetrics";

import { technologies } from '../../featured/project/constants/technologies';

export default function Home() {
  const {
    handleOpen,
    handleClose,
    open,
    handleChange,
    handleFile,
    handleSubmit,
    loading,
    inputAble,
  } = useModal();
  const { totalProjects, projectStatus, projects } = useProject();
  const { statusMetrics } = useMetrics();

  return (
    <section className="@container bg-blue-700">
      <article className="@container flex flex-row flex-wrap justify-center">
        <h1 className="basis-lg px-10 py-5 m-2 bg-blue-600">Dashboard</h1>

        <button
          className="bases-64 px-10 py-5 m-2 bg-blue-600"
          type="button"
          onClick={handleOpen}
        >
          Adicionar Projeto
        </button>

        <button className="bases-64 px-10 py-5 m-2 bg-blue-600" type="button">
          Importar Dados
        </button>

        {open && (
          <Modal
            onClose={handleClose}
            onChange={handleChange}
            onFile={handleFile}
            onSubmit={handleSubmit}
            loading={loading}
            inputAble={inputAble}
            technologies={technologies}
          />
        )}
      </article>

      <article className="@container flex flex-wrap justify-around m-12 bg-blue-500">
        <div className=" flex flex-col justify-center p-12 m-2 bg-blue-400">
          <h3>Projetos Totais</h3>
          <span className=" flex justify-center">{totalProjects}</span>
        </div>

        <div className="flex flex-col justify-center p-12 m-2 bg-blue-400">
          <h3>Projetos Terminados</h3>
          <span className="flex justify-center">{projectStatus[0].value}</span>
        </div>

        <div className="flex flex-col justify-center p-12 m-2 bg-blue-400">
          <h3>Projetos em Andamento</h3>
          <span className="flex justify-center">{projectStatus[1].value}</span>
        </div>

        <div className="flex flex-col justify-center p-12 m-2 bg-blue-400">
          <h3>Projetos Pendentes</h3>
          <span className="flex justify-center">{projectStatus[2].value}</span>
        </div>
      </article>

      <article className="@container flex flex-wrap gap-6 justify-around m-12 bg-blue-500">
        <div className=" bg-blue-400 flex-1 min-w-70 max-w-md m-2">
          <h3>Progresso Projetos</h3>
          <BasePieChart
            data={statusMetrics}
            cx="50%"
            cy="60%"
            startAngle={180}
            endAngle={0}
            innerRadius="55%"
            outerRadius="80%"
            cornerRadius="20%"
            paddingAngle={-15}
            centerLabel={(props) => (
              <RenderPieCenterLabel
                {...props}
                data={statusMetrics}
                totalProjects={totalProjects}
              />
            )}
          />
        </div>

        <div className=" p-12 m-2 bg-blue-400">
          Time Tracker (Tempo em execução)
        </div>

        <div className=" py-2 m-2 w-60 bg-blue-400">
          <header className="flex flex-wrap justify-between w-full mb-5">
            <h3 className="col-6 p-2 border bg-blue-600">Prjetos</h3>
            <button
              className="col-6 p-2 border bg-blue-600"
              onClick={handleOpen}
              type="button"
            >
              + Novo
            </button>
          </header>

          {projects.map((e) => (
            <section className="flex pt-2 justify-around items-center">
              <div className="flex justify-start">
                <img src={e.logo} alt="logo" width="40" height="20" />
              </div>

              <div className="flex flex-col items-end">
                <span className="flex text-black">{e.name}</span>
                <span className="flex text-gray-600">
                  {formatDate(e.createdAt)}
                </span>
              </div>
            </section>
          ))}
        </div>

        <div className=" p-12 m-2 bg-blue-400">
          Satisfação de clientes em média
        </div>
      </article>
    </section>
  );
}
