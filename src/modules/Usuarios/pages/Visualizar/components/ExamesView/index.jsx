import Badge from "@components/Badge";

import styles from "../DadosPessoaisView/DadosPessoaisView.module.css";

export default function ExamesView({usuario}){

    return(

        <div className={styles.grid}>

            <Campo titulo="Data Liberação" valor={usuario.dataLiberacaoEnsaio}/>

            <Campo titulo="Data RJM" valor={usuario.dataExameRjm}/>

            <Campo titulo="Culto Oficial" valor={usuario.dataExameCultoOficial}/>

            <Campo titulo="Oficialização" valor={usuario.dataExameOficializacao}/>

            <div>

                <label>Liberado</label>

                <Badge>

                    {usuario.liberadoEnsaio?"Sim":"Não"}

                </Badge>

            </div>

            <div>

                <label>RJM</label>

                <Badge>

                    {usuario.aprovadoRjm?"Aprovado":"Pendente"}

                </Badge>

            </div>

            <div>

                <label>Culto Oficial</label>

                <Badge>

                    {usuario.aprovadoCultoOficial?"Aprovado":"Pendente"}

                </Badge>

            </div>

            <div>

                <label>Oficialização</label>

                <Badge>

                    {usuario.aprovadoOficializacao?"Aprovado":"Pendente"}

                </Badge>

            </div>

        </div>

    );

}

function Campo({titulo,valor}){

    return(

        <div>

            <label>{titulo}</label>

            <span>{valor||"-"}</span>

        </div>

    );

}