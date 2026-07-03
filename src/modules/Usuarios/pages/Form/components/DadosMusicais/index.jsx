import Input from "@components/Input";
import Select from "@components/Select";
import Checkbox from "@components/Checkbox";

import instrumentos from "@constants/instrumentos";
import tiposUsuario from "@constants/tiposUsuario";

export default function DadosMusicais({

    dados,

    alterar

}) {

    const administrativo =

        dados.tipo === "INSTRUTOR" ||

        dados.tipo === "ENCARREGADO LOCAL" ||

        dados.tipo === "ENCARREGADO REGIONAL";

    return (

        <>

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

            {

                administrativo && (

                    <>

                        <Input
                            label="E-mail"
                            name="email"
                            value={dados.email || ""}
                            onChange={alterar}
                        />

                        <Input
                            label="CPF"
                            name="cpf"
                            value={dados.cpf || ""}
                            onChange={alterar}
                        />

                    </>

                )

            }

            {

                dados.tipo === "INSTRUTOR" && (

                    <Input
                        label="Registro de Instrutor"
                        name="numeroRegistroInstrutor"
                        value={dados.numeroRegistroInstrutor}
                        onChange={alterar}
                    />

                )

            }

            <Checkbox
                label="Responsável pela Setorizada"
                name="responsavelSetorizada"
                checked={dados.responsavelSetorizada}
                onChange={alterar}
            />

        </>

    );

}