import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import usuarioService from "../../services";

import Exames from "./components/Exames";
import DadosPessoais from "./components/DadosPessoais";
import Endereco from "./components/Endereco";
import DadosMusicais from "./components/DadosMusicais";
import Botoes from "./components/Botoes";
import useUsuarioForm from "../../hooks/useUsuarioForm";

import styles from "./Form.module.css";

export default function FormUsuario() {

    const navigate = useNavigate();

    const { id } = useParams();

    const editando = Boolean(id);
    const {

        dados,
    
        erros,
    
        alterar,
    
        validar,
    
        setDados
    
    }=useUsuarioForm({
    
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
    
        comumCongregacao:"Conjunto Requião",
    
        dataInicioGem:"",
    
        dataEncaminhamentoSetorizada:"",
    
        dataLiberacaoEnsaio:"",
    
        liberadoEnsaio:false,
    
        dataExameRjm:"",
    
        aprovadoRjm:false,
    
        dataExameCultoOficial:"",
    
        aprovadoCultoOficial:false,
    
        dataExameOficializacao:"",
    
        aprovadoOficializacao:false
    
    });
    /*const [dados, setDados] = useState({

        nome: "",
        idade: "",
        batizado: false,

        telefone: "",
        telefoneResponsavel: "",

        email: "",
        cpf: "",
        numeroRegistroInstrutor: "",

        endereco: "",
        bairro: "",
        complemento: "",

        instrumento: "VIOLINO",

        tipo: "ALUNO",

        responsavelSetorizada: false,

        comumCongregacao: "Conjunto Requião"

    });*/

    useEffect(() => {

        if (editando) {

            carregarUsuario();

        }

    }, []);

    async function carregarUsuario() {

        try {

            const response = await usuarioService.buscarPorId(id);

            setDados(response.data.usuario);

        }

        catch (error) {

            console.error(error);

        }

    }
    
    async function salvar(e){

        e.preventDefault();
    
        if(!validar()){
    
            return;
    
        }
    
        try{
    
            if(editando){
    const dadosLimpos = {

    ...dados,

    idade: dados.idade ? Number(dados.idade) : null,

    telefoneResponsavel: dados.telefoneResponsavel || null,

    email: dados.email || null,

    cpf: dados.cpf || null,

    numeroRegistroInstrutor: dados.numeroRegistroInstrutor || null,

    endereco: dados.endereco || null,

    bairro: dados.bairro || null,

    complemento: dados.complemento || null,

    dataInicioGem: dados.dataInicioGem || null,

    dataEncaminhamentoSetorizada: dados.dataEncaminhamentoSetorizada || null,

    dataLiberacaoEnsaio: dados.dataLiberacaoEnsaio || null,

    dataExameRjm: dados.dataExameRjm || null,

    dataExameCultoOficial: dados.dataExameCultoOficial || null,

    dataExameOficializacao: dados.dataExameOficializacao || null

};
                await usuarioService.atualizar(id,dadosLimpos);
    
            }else{
                console.log(dados);
                const dadosLimpos = {

    ...dados,

    idade: dados.idade ? Number(dados.idade) : null,

    telefoneResponsavel: dados.telefoneResponsavel || null,

    email: dados.email || null,

    cpf: dados.cpf || null,

    numeroRegistroInstrutor: dados.numeroRegistroInstrutor || null,

    endereco: dados.endereco || null,

    bairro: dados.bairro || null,

    complemento: dados.complemento || null,

    dataInicioGem: dados.dataInicioGem || null,

    dataEncaminhamentoSetorizada: dados.dataEncaminhamentoSetorizada || null,

    dataLiberacaoEnsaio: dados.dataLiberacaoEnsaio || null,

    dataExameRjm: dados.dataExameRjm || null,

    dataExameCultoOficial: dados.dataExameCultoOficial || null,

    dataExameOficializacao: dados.dataExameOficializacao || null

};
                await usuarioService.criar(dadosLimpos);
    
            }
    
            navigate("/usuarios");
    
        }
    
        catch(error){
    
            console.error(error);
    
        }
    
    }

    return (

        <div className={styles.container}>

            <h1>

                {

                    editando

                        ? "Editar Usuário"

                        : "Novo Usuário"

                }

            </h1>

            <form

                onSubmit={salvar}

                className={styles.form}

            >

                <section className={styles.card}>

                    <h2>Dados Pessoais</h2>

                    <DadosPessoais

                        dados={dados}

                        alterar={alterar}

                    />

                </section>

                <section className={styles.card}>

                    <h2>Endereço</h2>

                    <Endereco

                        dados={dados}

                        alterar={alterar}

                    />

                </section>

                <section className={styles.card}>

                    <h2>Dados Musicais</h2>

                    <DadosMusicais

                        dados={dados}

                        alterar={alterar}

                    />

                </section>
                <section className={styles.card}>

                    <h2>Exames e Histórico</h2>

                    <Exames

                        dados={dados}

                        alterar={alterar}

                    />

                </section>
                <Botoes

                    cancelar={() => navigate("/usuarios")}

                />

            </form>

        </div>

    );

}