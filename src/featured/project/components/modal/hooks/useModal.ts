import { useState } from "react";
import type { CreateProjectDTO } from "../../../types/dto";
import { useProject } from "../../../hooks/useProject";
import defaultLogo from "../../../../../../assets/images/interrogation-dot.jpg";


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
    logo: defaultLogo,
  });

  function handleOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  console.log(open)
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.currentTarget;
    
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    if (name === 'status' && value === 'conclued') {
      setInputAble(true);
    } else {
      setInputAble(false);
    };
  };

  function handleTechChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    
    setForm((prev) => ({
      ...prev,
      tech: prev.tech.includes(value)
            ? prev.tech.filter(item => item !== value)
            : [...prev.tech, value]
    }));
  };

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0];

    setForm((prev) => ({
      ...prev,
      logo: file ?? defaultLogo,
    }));
  };
 
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await addProject(form);
    handleClose();
  };

  return {
    handleChange,
    handleTechChange,
    handleSubmit,
    handleFile,
    handleOpen,
    handleClose,
    open,
    loading,
    inputAble,
    form
  };
};
