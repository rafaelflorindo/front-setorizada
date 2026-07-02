import Input from "@components/Input";
import Checkbox from "@components/Checkbox";

export default function Exames({

    dados,

    alterar

}) {

    return (

        <>

            <Input
                label="Início no GEM"
                type="date"
                name="dataInicioGem"
                value={dados.dataInicioGem || ""}
                onChange={alterar}
            />

            <Input
                label="Encaminhamento para Setorizada"
                type="date"
                name="dataEncaminhamentoSetorizada"
                value={dados.dataEncaminhamentoSetorizada || ""}
                onChange={alterar}
            />

            <Input
                label="Liberação para Ensaio"
                type="date"
                name="dataLiberacaoEnsaio"
                value={dados.dataLiberacaoEnsaio || ""}
                onChange={alterar}
            />

            <Checkbox
                label="Liberado para Ensaio"
                name="liberadoEnsaio"
                checked={dados.liberadoEnsaio}
                onChange={alterar}
            />

            <Input
                label="Data Exame RJM"
                type="date"
                name="dataExameRjm"
                value={dados.dataExameRjm || ""}
                onChange={alterar}
            />

            <Checkbox
                label="Aprovado RJM"
                name="aprovadoRjm"
                checked={dados.aprovadoRjm || false}
                onChange={alterar}
            />

            <Input
                label="Data Culto Oficial"
                type="date"
                name="dataExameCultoOficial"
                value={dados.dataExameCultoOficial || ""}
                onChange={alterar}
            />

            <Checkbox
                label="Aprovado Culto Oficial"
                name="aprovadoCultoOficial"
                checked={dados.aprovadoCultoOficial || false}
                onChange={alterar}
            />

            <Input
                label="Data Oficialização"
                type="date"
                name="dataExameOficializacao"
                value={dados.dataExameOficializacao || ""}
                onChange={alterar}
            />

            <Checkbox
                label="Aprovado Oficialização"
                name="aprovadoOficializacao"
                checked={dados.aprovadoOficializacao || false}
                onChange={alterar}
            />

        </>

    );

}