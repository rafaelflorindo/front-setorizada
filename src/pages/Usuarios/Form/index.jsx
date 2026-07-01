import { useEffect, useState } from "react";

import { useNavigate,useParams } from "react-router-dom";

import usuarioService from "@services/usuarios";

import styles from "./Form.module.css";

export default function FormUsuario(){

    const navigate=useNavigate();

    const {id}=useParams();

    const editando=!!id;

    const dadosIniciais={

        nome:"",
        idade:"",
        batizado:false,
        telefone:"",
        telefoneResponsavel:"",
        email:"",
        cpf:"",
        numeroRegistroInstrutor:"",
        endereco:"",
        bairro:"",
        complemento:"",
        instrumento:"VIOLINO",
        tipo:"ALUNO",
        responsavelSetorizada:false,
        comumCongregacao:"Conjunto Requião"

    };

    const[dados,setDados]=useState(dadosIniciais);

    useEffect(()=>{

        if(editando){

            carregarUsuario();

        }

    },[]);

    async function carregarUsuario(){

        try{

            const response=
            await usuarioService.buscarPorId(id);

            setDados(response.data.usuario);

        }

        catch(error){

            console.log(error);

        }

    }

    function alterar(e){

        const{name,value,type,checked}=e.target;

        setDados({

            ...dados,

            [name]:

            type==="checkbox"

            ? checked

            : value

        });

    }

    async function salvar(e){

        e.preventDefault();

        try{

            if(editando){

                await usuarioService.atualizar(

                    id,

                    dados

                );

            }

            else{

                await usuarioService.criar(

                    dados

                );

            }

            navigate("/usuarios");

        }

        catch(error){

            console.log(error);

        }

    }

    return(

        <div className={styles.container}>

            <h1>

                {

                    editando

                    ?

                    "Editar Usuário"

                    :

                    "Novo Usuário"

                }

            </h1>

            <form
                onSubmit={salvar}
                className={styles.form}
            >

                <section>

                    <h2>Dados Pessoais</h2>

                    <input

                        name="nome"

                        placeholder="Nome"

                        value={dados.nome}

                        onChange={alterar}

                    />

                    <input

                        name="idade"

                        type="number"

                        placeholder="Idade"

                        value={dados.idade || ""}

                        onChange={alterar}

                    />

                    <input

                        name="telefone"

                        placeholder="Telefone"

                        value={dados.telefone || ""}

                        onChange={alterar}

                    />

                    <label>

                        <input

                            type="checkbox"

                            name="batizado"

                            checked={dados.batizado}

                            onChange={alterar}

                        />

                        Batizado

                    </label>

                </section>

                <section>

                    <h2>Dados Musicais</h2>

                    <select

                        name="tipo"

                        value={dados.tipo}

                        onChange={alterar}

                    >

                        <option value="ALUNO">Aluno</option>

                        <option value="INSTRUTOR">Instrutor</option>

                        <option value="ENCARREGADO LOCAL">Encarregado Local</option>

                        <option value="ENCARREGADO REGIONAL">Encarregado Regional</option>

                    </select>

                    <select

                        name="instrumento"

                        value={dados.instrumento}

                        onChange={alterar}

                    >

                        <option value="VIOLINO">Violino</option>

                        <option value="VIOLA">Viola</option>

                        <option value="VIOLONCELO">Violoncelo</option>

                        <option value="CONTRABAIXO">Contrabaixo</option>

                    </select>

                </section>

                <div className={styles.buttons}>

                    <button
                        type="button"
                        onClick={()=>navigate("/usuarios")}
                    >

                        Cancelar

                    </button>

                    <button type="submit">

                        Salvar

                    </button>

                </div>

            </form>

        </div>

    );

}