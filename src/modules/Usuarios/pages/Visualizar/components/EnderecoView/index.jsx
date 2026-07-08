import styles from "../DadosPessoaisView/DadosPessoaisView.module.css";

export default function EnderecoView({usuario}){

    return(

        <div className={styles.grid}>

            <Campo titulo="Endereço" valor={usuario.endereco}/>

            <Campo titulo="Bairro" valor={usuario.bairro}/>

            <Campo titulo="Complemento" valor={usuario.complemento}/>

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