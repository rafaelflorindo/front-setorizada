import Badge from "@components/Badge";

import styles from "../DadosPessoaisView/DadosPessoaisView.module.css";

export default function DadosMusicaisView({usuario}){

    return(

        <div className={styles.grid}>

            <Campo titulo="Congregação" valor={usuario.comumCongregacao}/>

            <Campo titulo="Registro" valor={usuario.numeroRegistroInstrutor}/>

            <Campo titulo="Início GEM" valor={usuario.dataInicioGem}/>

            <Campo titulo="Encaminhamento" valor={usuario.dataEncaminhamentoSetorizada}/>

            <div>

                <label>Tipo</label>

                <Badge tipo={usuario.tipo}/>

            </div>

            <div>

                <label>Instrumento</label>

                <Badge instrumento={usuario.instrumento}/>

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