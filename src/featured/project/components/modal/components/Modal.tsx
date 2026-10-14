import React from "react";
import Dropdown from "../../dropdown/components/Dropdown";
import { useDropdown } from "../../dropdown/hooks/useDropdown";
import { useModal } from "../hooks/useModal";

type ModalProps = {
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Modal({ 
  onClose,
  onSubmit,
}: ModalProps) {

  const { 
    handleClick, 
    dropdownIsOpen, 
    selectedLabels
  } = useDropdown();

  const {  
    handleChange, 
    handleTechChange, 
    handleFile,
    loading,
    form,
  } = useModal();
 
  return (
    <div
      className={` bg-red-700  container basis-md flex flex-col flex-wrap p-5`}
    >
      <form
        className=" flex flex-col justify-around bg-red-600"
        onSubmit={onSubmit}
      >
        <div className="flex flex-row justify-center">
          <label className="" htmlFor="input">
            Nome do Projeto:{" "}
          </label>
          <input
            className=""
            type="text"
            name="name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-row justify-center">
          <label className="" htmlFor="input">
            Logo:{" "}
          </label>
          <input
            className=""
            type="file"
            accept="image/*"
            name="logo"
            onChange={handleFile}
          />
        </div>

        <div className="flex flex-row justify-center bg-red-500">
          <label className="bg-red-400" htmlFor="input">
            Descrição:{" "}
          </label>
          <input
            className="bg-red-400"
            type="text"
            name="description"
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-row justify-center bg-red-500">
          <label className="bg-red-400" htmlFor="input">
            Prioridade:{" "}
          </label>
          <select className="bg-red-400" name="priority" onChange={handleChange}>
            <option value="low">Baixa</option>
            <option value="medium">Média</option>
            <option value="high">Alta</option>
          </select>
        </div>

        <div className="flex flex-row justify-center bg-red-500">
          <label className="bg-red-400" htmlFor="input">
            Status:{" "}
          </label>
          <select className="bg-red-400" name="status" onChange={handleChange}>
            <option value="planning">Planejamento</option>
            <option value="running">Em andamento</option>
            <option value="conclued">Concluído</option>
          </select>
        </div>

        <div className="flex flex-row justify-center bg-red-500">
          <label className="bg-red-400" htmlFor="input">
            Data Início:{" "}
          </label>
          <input
            className="bg-red-400"
            type="date"
            name="createdAt"
            min="01-01-2000"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-row justify-center bg-red-500">
          <label className="bg-red-400" htmlFor="input">
            Data Fim:{" "}
          </label>
          <input
            className="bg-red-400"
            type="date"
            name="finishedAt"
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-row justify-center bg-red-500">
          <label className="bg-red-400" htmlFor="input">
            Estágio:{" "}
          </label>
          <select className="bg-red-400" name="stage" onChange={handleChange}>
            {form.status === "planning" && (
              <>
                <option value="definition">Definição</option>
                <option value="planning">Planejamento</option>
                <option value="requeriments">Requerimentos</option>
              </>
            )}
            {form.status === "running" && (
              <>
                <option value="design">Design</option>
                <option value="coding">Coding</option>
                <option value="testing">Teste</option>
              </>
            )}
            {(form.status === "running" || form.status === "conclued") && (
              <>
                <option value="documentation">Documentação</option>
                <option value="deployment">Deploy</option>
              </>
            )}
          </select>
        </div>

        <div className="flex justify-center bg-red-500">
          <label className="bg-red-400" htmlFor="input">
            Tecnologias:{" "}
          </label>

          <div>
            <button 
              onClick={handleClick} 
              value="dropdown"
              type="button"
            >
              {form.tech.length === 0 ? "Selecionar..." : form.tech.toString()}
            </button>

            <Dropdown
              onClick={handleClick}
              onTechChange={handleTechChange}
              form={form.tech}
              dropdownIsOpen={dropdownIsOpen}
              selectedLabels={selectedLabels}
            />
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-around bg-red-500">
          <button
            className="flex flex-col justify-center size-24 bg-red-400"
            type="submit"
            disabled={loading}
          >
            {loading ? "Salvando..." : "Salvar"}
          </button>

          <button
            className="flex flex-col justify-center size-24 bg-red-400"
            type="button"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
