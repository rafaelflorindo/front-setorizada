import { useEffect, useState } from "react";
import usuarioService from "@services/usuarios";

import styles from "./Usuarios.module.css";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarUsuarios();
  }, []);

  async function carregarUsuarios() {
    try {
      const response = await usuarioService.listar();

      setUsuarios(response.data.usuarios);
    } catch (error) {
      console.error(error);
      alert("Erro ao carregar usuários");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <div className={styles.container}>
      <h1>Usuários</h1>

      <div className={styles.lista}>
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className={styles.card}
          >
            <h3>{usuario.nome}</h3>

            <p>
              <strong>Tipo:</strong> {usuario.tipo}
            </p>

            <p>
              <strong>Instrumento:</strong>{" "}
              {usuario.instrumento}
            </p>

            <p>
              <strong>Telefone:</strong>{" "}
              {usuario.telefone}
            </p>

            <p>
              <strong>Congregação:</strong>{" "}
              {usuario.comumCongregacao}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}