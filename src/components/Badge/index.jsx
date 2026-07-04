import styles from "./Badge.module.css";

export default function Badge({

    tipo,

    instrumento,

    children

}) {

    let classe = "gray";

    let texto = children;

    if (tipo) {

        texto = tipo;

        switch (tipo) {

            case "ALUNO":
                classe = "green";
                break;

            case "INSTRUTOR":
                classe = "blue";
                break;

            case "ENCARREGADO LOCAL":
                classe = "orange";
                break;

            case "ENCARREGADO REGIONAL":
                classe = "purple";
                break;

            default:
                classe = "gray";

        }

    }

    if (instrumento) {

        texto = instrumento;

        switch (instrumento) {

            case "VIOLINO":
                classe = "green";
                break;

            case "VIOLA":
                classe = "blue";
                break;

            case "VIOLONCELO":
                classe = "orange";
                break;

            case "CONTRABAIXO":
                classe = "red";
                break;

            default:
                classe = "gray";

        }

    }

    return (

        <span className={`${styles.badge} ${styles[classe]}`}>

            {texto}

        </span>

    );

}