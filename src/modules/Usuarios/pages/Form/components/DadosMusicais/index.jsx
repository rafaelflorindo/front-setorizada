import Input from "@components/Input";
import Select from "@components/Select";
import Checkbox from "@components/Checkbox";

import instrumentos from "@constants/instrumentos";
import tiposUsuario from "@constants/tiposUsuario";

export default function DadosMusicais({

    dados,

    alterar

}) {

    return (

        <>

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
                label="Registro"
                name="numeroRegistroInstrutor"
                value={dados.numeroRegistroInstrutor}
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
                label="Responsável pela Setorizada"
                name="responsavelSetorizada"
                checked={dados.responsavelSetorizada}
                onChange={alterar}
            />

        </>

    );

}