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

            <Checkbox
                label="Batizado"
                name="batizado"
                checked={dados.batizado}
                onChange={alterar}
            />

        </>

    );

}