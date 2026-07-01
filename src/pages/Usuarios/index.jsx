import { useEffect, useState } from "react";

import usuarioService from "@services/usuarios";

import UsuarioCard from "./components/UsuarioCard";

import styles from "./Usuarios.module.css";

export default function Usuarios() {

    const [usuarios,setUsuarios]=useState([]);

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        carregarUsuarios();

    },[]);

    async function carregarUsuarios(){

        try{

            const response=await usuarioService.listar();

            setUsuarios(response.data.usuarios);

        }

        catch(error){

            console.log(error);

        }

        finally{

            setLoading(false);

        }

    }

    async function excluir(id){

        const confirmar=window.confirm(

            "Deseja realmente excluir?"

        );

        if(!confirmar) return;

        try{

            await usuarioService.excluir(id);

            carregarUsuarios();

        }

        catch(error){

            alert("Erro ao excluir.");

        }

    }

    function editar(usuario){

        console.log(usuario);

    }

    if(loading){

        return <h2>Carregando...</h2>

    }

    return(

        <div className={styles.container}>

            <div className={styles.header}>

                <h1>Usuários</h1>

                <button>

                    Novo Usuário

                </button>

            </div>

            <div className={styles.lista}>

                {

                    usuarios.map(usuario=>(

                        <UsuarioCard

                            key={usuario.id}

                            usuario={usuario}

                            onEditar={editar}

                            onExcluir={excluir}

                        />

                    ))

                }

            </div>

        </div>

    )

}