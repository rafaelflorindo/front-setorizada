import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@layouts/MainLayout";

import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";

import ListaUsuarios from "src/modules/Usuarios/Lista";
import FormUsuario from "src/modules/Usuarios/Form";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<MainLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/usuarios"
            element={<ListaUsuarios />}
          />

          <Route
            path="/usuarios/novo"
            element={<FormUsuario />}
          />

          <Route
            path="/usuarios/:id"
            element={<FormUsuario />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}