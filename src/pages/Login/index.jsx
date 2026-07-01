import styles from "./Login.module.css";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ><h1>Login</h1>
      <p>Sistema Setorizada</p>
      <button
        onClick={() => navigate("/usuarios")}
      >
        Entrar
      </button>
    </div>
  );
}