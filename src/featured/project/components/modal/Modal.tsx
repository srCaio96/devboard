import React  from "react";

import { type Technology } from "../../types/technology";
import { groupedTechnologies } from "../../constants/technologies";
// import styles from './Modal.module.css';


type ModalProps = {
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onFile:(e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
    loading: boolean;
    inputAble: boolean;
    technologies: Technology[];
};

export default function Modal({ 
    onClose, 
    onChange, 
    onFile, 
    onSubmit, 
    loading, 
    inputAble,
}: ModalProps) {
   console.log(groupedTechnologies);
    return (
        <div className={` bg-red-700  container basis-md flex flex-col flex-wrap p-5`}>
            <form className=" flex flex-col justify-around bg-red-600" onSubmit={onSubmit}>
                <div className="flex flex-row justify-center">
                    <label className="" htmlFor="input">Nome do Projeto: </label>
                    <input 
                        className="" 
                        type="text" 
                        name="name" 
                        onChange={onChange} 
                        required
                    />
                </div>

                <div className="flex flex-row justify-center">
                    <label className="" htmlFor="input">Logo: </label>
                    <input 
                        className="" 
                        type="file" 
                        accept="image/*" 
                        name="logo" 
                        onChange={onFile} 
                        required
                    />
                </div>
                
                <div className="flex flex-row justify-center bg-red-500">
                    <label className="bg-red-400" htmlFor="input">Descrição: </label>
                    <input 
                        className="bg-red-400" 
                        type="text" 
                        name="description" 
                        onChange={onChange} 
                    />
                </div>
                
                <div className="flex flex-row justify-center bg-red-500">
                    <label className="bg-red-400" htmlFor="input">Status: </label>
                    <select 
                        className="bg-red-400" 
                        name="priority" 
                        onChange={onChange}
                    >
                        <option value="low">Baixa</option>
                        <option value="medium">Média</option>
                        <option value="high">Alta</option>
                    </select>
                </div>
                
                <div className="flex flex-row justify-center bg-red-500">
                    <label className="bg-red-400" htmlFor="input">Prioridade: </label>
                    <select 
                        className="bg-red-400" 
                        name="status" 
                        onChange={onChange}
                    >
                        <option value="planning">Planejamento</option>
                        <option value="running">Em andamento</option>
                        <option value="conclued">Concluído</option>
                        
                    </select>
                </div>

                <div className="flex flex-row justify-center bg-red-500">
                    <label className="bg-red-400" htmlFor="input">Data Início: </label>
                    <input
                        className="bg-red-400" 
                        type="date" 
                        name="createdAt"
                        min="01/01/2000"
                        onChange={onChange}
                        required
                    />
                </div>

                {inputAble && ( 
                <>
                    <div className="flex flex-row justify-center bg-red-500">
                        <label className="bg-red-400" htmlFor="input">Data Fim: </label>
                        <input
                            className="bg-red-400" 
                            type="date" 
                            name="finishedAt" 
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="flex flex-row justify-center bg-red-500">
                        <label className="bg-red-400" htmlFor="input">Estágio: </label>
                        <select 
                            className="bg-red-400" 
                            name="stage" 
                            onChange={onChange}
                        >
                            <option value="defination">Definição</option>
                            <option value="planning">Planejamento</option>
                            <option value="requeriments">Requerimentos</option>
                            <option value="design">Design</option>
                            <option value="coding">Coding</option>
                            <option value="testing">Teste</option>
                            <option value="documentation">Documentação</option>
                            <option value="deployment">Deploy</option>
                        </select>
                    </div>
                </>
                )}
                              
                <div className="flex flex-row justify-center bg-red-500">
                    <label className="bg-red-400" htmlFor="input">Tecnologias: </label>
                    <select 
                        className="bg-red-400" 
                        name="tech" 
                        onChange={onChange} 
                        required
                    >
                       
                        {Object.entries(groupedTechnologies).map(([area, types]) => (
                            <optgroup key={area} label={area}>
                                {Object.entries(types).flatMap(([type, techs]) =>
                                    techs.map((tech) => (
                                        <option key={tech.id} value={tech.id}>
                                            {tech.name}
                                        </option>
                                    ))   
                                )}
                            </optgroup>
                        ))}
                    </select>
                </div>
                
                <div className="flex flex-row flex-wrap justify-around bg-red-500">
                    <button 
                        className="flex flex-col justify-center size-24 bg-red-400"
                        type="submit"  
                        disabled={loading}
                    >
                            {loading ? 'Salvando...' : 'Salvar'}
                    </button>

                    <button 
                        className="flex flex-col justify-center size-24 bg-red-400"
                        type="button" 
                        onClick={onClose}
                    >Cancelar</button>
                </div>
            </form> 
        </div>
    );
}
                            