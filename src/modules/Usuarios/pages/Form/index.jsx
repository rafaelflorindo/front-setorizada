import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//import usuarioService from "@services/usuarios";
import usuarioService from "../../services";
import Input from "@components/Input";
import Select from "@components/Select";
import Checkbox from "@components/Checkbox";
import Button from "@components/Button";

import instrumentos from "@constants/instrumentos";
import tiposUsuario from "@constants/tiposUsuario";

import styles from "./Form.module.css";

export default function FormUsuario() {

    const navigate = useNavigate();

    const { id } = useParams();

    const editando = Boolean(id);

    const [dados, setDados] = useState({
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
    });

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

            console.log(error);

        }

    }

    function alterar(e) {

        const { name, value, checked, type } = e.target;

        setDados({

            ...dados,

            [name]: type === "checkbox" ? checked : value

        });

    }

    async function salvar(e) {

        e.preventDefault();

        try {

            if (editando) {

                await usuarioService.atualizar(id, dados);

            }

            else {

                await usuarioService.criar(dados);

            }

            navigate("/usuarios");

        }

        catch (error) {

            console.log(error);

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

                <Input
                    label="Nome"
                    name="nome"
                    value={dados.nome}
                    onChange={alterar}
                />

                <Input
                    label="Idade"
                    name="idade"
                    type="number"
                    value={dados.idade}
                    onChange={alterar}
                />

                <Input
                    label="Telefone"
                    name="telefone"
                    value={dados.telefone}
                    onChange={alterar}
                />

                <Input
                    label="Telefone Responsável"
                    name="telefoneResponsavel"
                    value={dados.telefoneResponsavel}
                    onChange={alterar}
                />

                <Input
                    label="Email"
                    name="email"
                    value={dados.email}
                    onChange={alterar}
                />

                <Input
                    label="CPF"
                    name="cpf"
                    value={dados.cpf}
                    onChange={alterar}
                />

                <Input
                    label="Registro Instrutor"
                    name="numeroRegistroInstrutor"
                    value={dados.numeroRegistroInstrutor}
                    onChange={alterar}
                />

                <Input
                    label="Endereço"
                    name="endereco"
                    value={dados.endereco}
                    onChange={alterar}
                />

                <Input
                    label="Bairro"
                    name="bairro"
                    value={dados.bairro}
                    onChange={alterar}
                />

                <Input
                    label="Complemento"
                    name="complemento"
                    value={dados.complemento}
                    onChange={alterar}
                />

                <Select
                    label="Tipo"
                    name="tipo"
                    value={dados.tipo}
                    options={tiposUsuario}
                    onChange={alterar}
                />

                <Select
                    label="Instrumento"
                    name="instrumento"
                    value={dados.instrumento}
                    options={instrumentos}
                    onChange={alterar}
                />

                <Checkbox
                    label="Batizado"
                    name="batizado"
                    checked={dados.batizado}
                    onChange={alterar}
                />

                <Checkbox
                    label="Responsável pela Setorizada"
                    name="responsavelSetorizada"
                    checked={dados.responsavelSetorizada}
                    onChange={alterar}
                />

                <div className={styles.buttons}>

                    <Button
                        variant="secondary"
                        onClick={() => navigate("/usuarios")}
                    >
                        Cancelar
                    </Button>

                    <Button
                        type="submit"
                    >
                        Salvar
                    </Button>

                </div>

            </form>

        </div>

    );

}
