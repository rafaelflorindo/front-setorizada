import { useState,useEffect } from "react";

import styles from "./UsuarioForm.module.css";

export default function UsuarioForm({

    usuario,

    onSalvar

}){

    const[dados,setDados]=useState({

        nome:"",

        telefone:"",

        instrumento:"VIOLINO",

        tipo:"ALUNO",

        comumCongregacao:"Conjunto Requião"

    });

    useEffect(()=>{

        if(usuario){

            setDados(usuario);

        }

    },[usuario]);

    function alterar(e){

        setDados({

            ...dados,

            [e.target.name]:e.target.value

        });

    }

    function submit(e){

        e.preventDefault();

        onSalvar(dados);

    }

    return(

        <form
            onSubmit={submit}
            className={styles.form}
        >

            <input

                name="nome"

                placeholder="Nome"

                value={dados.nome}

                onChange={alterar}

            />

            <input

                name="telefone"

                placeholder="Telefone"

                value={dados.telefone || ""}

                onChange={alterar}

            />

            <select

                name="instrumento"

                value={dados.instrumento || ""}

                onChange={alterar}

            >

<option>BARÍTONO</option>
<option>CLARINETE</option>
<option>CLARONE</option>
<option>CONTRABAIXO</option>
<option>CORNE INGLÊS</option>
<option>CORNETA</option>
<option>EUFÔNIO</option>
<option>FAGOTE</option>
<option>FLAUTA TRANSVERSAL</option>
<option>FLUGELHORN</option>
<option>OBÓE</option>
<option>ÓRGÃO ELETRÔNICO</option>
<option>SAXOFONE ALTO</option>
<option>SAXOFONE BARÍTONO</option>
<option>SAXOFONE SOPRANO</option>
<option>SAXOFONE TENOR</option>
<option>TROMBONE DE PISTO</option>
<option>TROMBONE DE VARA</option>
<option>TROMPA</option>
<option>TROMPETE</option>
<option>TUBA</option>
<option>VIOLA</option>
<option>VIOLINO</option>
<option>VIOLONCELO</option>

            </select>

            <select

                name="tipo"

                value={dados.tipo}

                onChange={alterar}

            >

                <option>ALUNO</option>

                <option>INSTRUTOR</option>

                <option>ENCARREGADO LOCAL</option>

                <option>ENCARREGADO REGIONAL</option>

            </select>

            <button>

                Salvar

            </button>

        </form>

    )

}