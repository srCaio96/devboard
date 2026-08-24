import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/home/Home";
import Clients from "../../pages/clients/Clients";
import Projects from "../../pages/projects/Projects";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="clients" element={<Clients />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  );
}
