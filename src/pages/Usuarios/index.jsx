import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import usuarioService from "@services/usuarios";

import UsuarioCard from "./components/UsuarioCard";
import UsuarioModal from "./components/UsuarioModal"
import UsuarioForm from "./components/UsuarioForm"

import styles from "./Usuarios.module.css";


export default function Usuarios() {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    const [loading, setLoading] = useState(true);

    const [modalAberto, setModalAberto] = useState(false);

    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);

    useEffect(() => {

        carregarUsuarios();

    }, []);

    async function carregarUsuarios() {

        try {

            const response = await usuarioService.listar();

            setUsuarios(response.data.usuarios);

        }

        catch (error) {

            console.log(error);

        }

        finally {

            setLoading(false);

        }

    }

    async function salvar(dados) {

        try {

            if (dados.id) {

                await usuarioService.atualizar(

                    dados.id,

                    dados

                );

            }

            else {

                await usuarioService.criar(

                    dados

                );

            }

            setModalAberto(false);

            carregarUsuarios();

        }

        catch (error) {

            console.log(error);

        }

    }

    async function excluir(id) {

        const confirmar = window.confirm(

            "Deseja realmente excluir?"

        );

        if (!confirmar) return;

        try {

            await usuarioService.excluir(id);

            carregarUsuarios();

        }

        catch (error) {

            alert("Erro ao excluir.");

        }

    }

    function editar(usuario) {

        navigate(`/usuarios/${usuario.id}`);

    }

    if (loading) {

        return <h2>Carregando...</h2>

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

                        <UsuarioCard

                            key={usuario.id}

                            usuario={usuario}

                            onEditar={editar}

                            onExcluir={excluir}

                        />

                    ))

                }

            </div>

            <UsuarioModal

                aberto={modalAberto}

                titulo={
                    usuarioSelecionado
                        ? "Editar Usuário"
                        : "Novo Usuário"
                }

                onClose={() => setModalAberto(false)}

            >

                <UsuarioForm

                    usuario={usuarioSelecionado}

                    onSalvar={salvar}

                />

            </UsuarioModal>

        </div>

    )

}