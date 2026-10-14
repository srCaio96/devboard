import React from "react";
import { groupedTechnologies } from "../../../constants/technologies.ts";

type DropdownProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onTechChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form: string[];
  dropdownIsOpen: boolean;
  selectedLabels: string[];

};

export default function Dropdown({
  onClick,
  onTechChange,
  form,
  dropdownIsOpen,
  selectedLabels,
}: DropdownProps) {

  return (
    <>
      
      {Object.entries(groupedTechnologies).map(([area, types]) => (
        <div key={area} className="container">
          {dropdownIsOpen && (
            <button onClick={onClick} className="bg-blue-400" value={area}>
              {area}
            </button>
          )}

          {Object.entries(types).map(([type, techs]) => (
            <div key={type} className="flex flex-col">
              {selectedLabels.includes(area) && dropdownIsOpen && (
                <button
                  onClick={onClick}
                  className="bg-cyan-400"
                  value={`${area}:${type}`}
                >
                  {type}
                </button>
              )}

              {techs.map((tech) => (
                <>
                  {selectedLabels.includes(`${area}:${type}`) && 
                    selectedLabels.includes(area) && dropdownIsOpen && (
                    <label key={tech.id}>
                      <input
                        onChange={onTechChange}
                        type="checkbox"
                        value={tech.id}
                        checked={form.includes(tech.id)}
                      />
                      {tech.name}
                    </label>
                  )}
                </>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
}