import Badge from "@components/Badge";

import styles from "./DadosPessoaisView.module.css";

export default function DadosPessoaisView({usuario}){

    return(

        <div className={styles.grid}>

            <Campo titulo="Nome" valor={usuario.nome}/>

            <Campo titulo="Idade" valor={usuario.idade}/>

            <Campo titulo="Telefone" valor={usuario.telefone}/>

            <Campo titulo="Responsável" valor={usuario.telefoneResponsavel}/>

            <Campo titulo="Email" valor={usuario.email}/>

            <Campo titulo="CPF" valor={usuario.cpf}/>

            <div>

                <label>Batizado</label>

                <Badge>

                    {usuario.batizado?"Sim":"Não"}

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