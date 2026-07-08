import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import usuarioService from "../../services";

import DadosPessoaisView from "./components/DadosPessoaisView";
import EnderecoView from "./components/EnderecoView";
import DadosMusicaisView from "./components/DadosMusicaisView";
import ExamesView from "./components/ExamesView";
import BotoesView from "./components/BotoesView";

import styles from "./Visualizar.module.css";

export default function VisualizarUsuario(){

    const navigate=useNavigate();

    const {id}=useParams();

    const [usuario,setUsuario]=useState(null);

    useEffect(()=>{

        carregar();

    },[]);

    async function carregar(){

        const response=await usuarioService.buscarPorId(id);

        setUsuario(response.data.usuario);

    }

    if(!usuario){

        return <h2>Carregando...</h2>;

    }

    return(

        <div className={styles.container}>

            <h1>Visualização do Usuário</h1>

            <section className={styles.card}>

                <h2>Dados Pessoais</h2>

                <DadosPessoaisView usuario={usuario}/>

            </section>

            <section className={styles.card}>

                <h2>Endereço</h2>

                <EnderecoView usuario={usuario}/>

            </section>

            <section className={styles.card}>

                <h2>Dados Musicais</h2>

                <DadosMusicaisView usuario={usuario}/>

            </section>

            <section className={styles.card}>

                <h2>Histórico</h2>

                <ExamesView usuario={usuario}/>

            </section>

            <BotoesView

                voltar={()=>navigate("/usuarios")}

                editar={()=>navigate(`/usuarios/${usuario.id}`)}

            />

        </div>

    );

}