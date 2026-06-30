import { useEffect, useState } from "react";

import usuarioService from "@services/usuarios";

export default function Dashboard() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    carregarUsuarios();

  }, []);

  async function carregarUsuarios() {

    try {

      const response = await usuarioService.listar();

      console.log(response.data);

      setUsuarios(response.data);

    } catch (error) {

      console.error(error);

    }

  }

  return (

    <div>

      <h1>Dashboard</h1>

      <hr />

      {usuarios.map(usuario => (

        <p key={usuario.id}>

          {usuario.nome}

        </p>

      ))}

    </div>

  );

}