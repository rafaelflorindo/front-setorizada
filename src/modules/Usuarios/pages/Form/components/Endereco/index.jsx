import Input from "@components/Input";

export default function Endereco({

    dados,

    alterar

}) {

    return (

        <>

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

        </>

    );

}