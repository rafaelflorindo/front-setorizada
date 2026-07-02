import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//import usuarioService from "@services/usuarios";
import usuarioService from "../../services";
//import UsuarioCard from "../../components/UsuarioCard";
import UsuarioTable from "../../components/UsuarioTable";
import styles from "./Lista.module.css";

export default function ListaUsuarios() {

    const navigate = useNavigate();

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

        } finally {

            setLoading(false);

        }

    }

    async function excluir(id) {

        if (!window.confirm("Deseja excluir este usuário?")) return;

        try {

            await usuarioService.excluir(id);

            carregarUsuarios();

        } catch (error) {

            console.error(error);

        }

    }

    if (loading) {

        return <h2>Carregando...</h2>;

    }

    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <h1>Usuários</h1>

                <button
                    onClick={() => navigate("/usuarios/novo")}
                >
                    Novo Usuário
                </button>

            </div>

            <div className={styles.lista}>

                {

                    usuarios.map(usuario => (

                       <UsuarioTable

    usuarios={usuarios}

    onEditar={(id)=>navigate(`/usuarios/${id}`)}

    onExcluir={excluir}

/>

                ))

                }

            </div>

        </div>

    );

}
