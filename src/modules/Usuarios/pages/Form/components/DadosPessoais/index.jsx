import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function DadosPessoais({

    dados,

    alterar

}) {

    return (

        <>

            <Input
                label="Nome"
                name="nome"
                value={dados.nome}
                onChange={alterar}
            />

            <Input
                label="Idade"
                type="number"
                name="idade"
                value={dados.idade}
                onChange={alterar}
            />

            <Input
                label="Telefone"
                name="telefone"
                value={dados.telefone}
                onChange={alterar}
            />

            {

                Number(dados.idade) < 18 && (

                    <Input
                        label="Telefone do Responsável"
                        name="telefoneResponsavel"
                        value={dados.telefoneResponsavel}
                        onChange={alterar}
                    />

                )

            }

            <Checkbox
                label="Batizado"
                name="batizado"
                checked={dados.batizado}
                onChange={alterar}
            />

        </>

    );

}