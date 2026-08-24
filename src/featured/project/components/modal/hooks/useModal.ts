import { useState } from "react";
import type { CreateProjectDTO } from "../../../types/dto";
import { useProject } from "../../../hooks/useProject";

export function useModal() {

  const { addProject, loading } = useProject();

  const [open, setOpen] = useState<boolean>(false);
  const [inputAble, setInputAble] = useState<boolean>(true);
  const [form, setForm] = useState<CreateProjectDTO>({
    name: "",
    description: "",
    status: "planning",
    stage: "defination",
    createdAt: '',
    finishedAt: '',
    priority: "low",
    tech: [],
    client: "",
    logo: null,
  });

  function handleOpen() {
    setOpen(true);
    // const date1 = Date.UTC(2026, 7, 28);
    // const date2 = Date.UTC(2026, 7, 26);
    // console.log(date1, date2)
    // const resultDifference = date1 - date2;
    // const totalDays = Math.floor(resultDifference / (1000 * 60 * 60 * 24));
    // console.log(totalDays);
  }

  function handleClose() {
    setOpen(false);
    setForm({ ...form, logo: null });
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.currentTarget;
    console.log(name, value);

    setForm((prev) => ({
      ...prev,

      [name]: name === "tech" ? value.split(", ") : value
    }));

    if (name === 'status' && value === 'conclued') {
      setInputAble(false);
    } else {
      setInputAble(true);
    };
  };

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0] || null;

    setForm((prev) => ({
      ...prev,
      logo: file,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await addProject(form);

    handleClose();
  }

  return {
    handleChange,
    handleSubmit,
    handleFile,
    handleOpen,
    handleClose,
    open,
    loading,
    inputAble,
    form
  };
}
