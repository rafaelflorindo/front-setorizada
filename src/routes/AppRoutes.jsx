import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "@layouts/MainLayout";

import Login from "@pages/Login";
import Dashboard from "@pages/Dashboard";

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
        </Route>

      </Routes>
    </BrowserRouter>
  );
}