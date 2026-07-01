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
            console.log(response);
            setUsuarios(response.data.usuarios);

        } catch (error) {

            console.error(error);

        }

    }

    return (

        <div>

            <h1>Dashboard</h1>

            <hr />

            {usuarios.map(usuario => (

                <div key={usuario.id}>

                    <h3>{usuario.nome}</h3>

                    <p>{usuario.instrumento}</p>

                    <p>{usuario.tipo}</p>

                </div>

            ))}

        </div>

    );

}