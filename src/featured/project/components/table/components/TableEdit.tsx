import React from "react";
import { formatDate } from "../../../../../shared/utils/formatDate";
import type { TableMode } from "../hooks/useTable";
import { useDropdown } from "../../dropdown/hooks/useDropdown";
import { stages } from "../../../constants/stages";
import { status } from "../../../constants/status";
import { priority } from "../../../constants/priority";
import Dropdown from "../../dropdown/components/Dropdown";
import type { Project } from "../../../types/project";

type TableEditProps = {
  mode: TableMode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  onClick: (id: string) => void;
  editProject: Project[];
};

export default function TableEdit({ 
  mode, 
  onChange, 
  onClick,
  editProject
}: TableEditProps) {

  const { handleClick, dropdownIsOpen, selectedLabels } = useDropdown();
  

  return (
    <>
      {editProject.map((p) => {
        const editAble = editTableIds.has(p.id);
        const currentStage = stages.find((item) => item.id === p?.stage);
        const currentStatus = status.find((item) => item.id === p?.status);
        const currentPriority = priority.find(
          (item) => item.id === p?.priority,
        );

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
              {editAble && (
                <>
                  <button
                    onClick={() => handleClickDropdown(p.id)}
                    value="dropdown"
                  >
                    {p.tech.length === 0 ? "Selecionar..." : p.tech.toString()}
                  </button>

                  <Dropdown
                    onClick={handleClick}
                    onTechChange={(tech) => onChange(tech, p.id)}
                    form={p.tech}
                    dropdownIsOpen={dropdownIsOpen}
                    selectedLabels={selectedLabels}
                    openId={openId}
                  />
                </>
              )}
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

            {!editAble || mode === "remove" ? (
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
                value={currentStatus?.label}
              />
            </td>

            <td>
              <input
                type="text"
                className="border p-2"
                name="priority"
                onChange={(e) => onChange(e, p.id)}
                disabled={!editAble}
                value={currentPriority?.label}
              />
            </td>

            <td>
              <input
                type="text"
                className="border p-2"
                name="priority"
                onChange={(e) => onChange(e, p.id)}
                disabled={!editAble}
                value={currentStage?.label}
              />
            </td>

            <td>
              <input
                type="text"
                className="border p-2"
                name="priority"
                onChange={(e) => onChange(e, p.id)}
                disabled
                value={currentStage?.progress}
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
  );
}
