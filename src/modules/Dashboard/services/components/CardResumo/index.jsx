import styles from "./CardResumo.module.css";

export default function CardResumo({

    titulo,

    valor

}) {

    return (

        <div className={styles.card}>

            <span>

                {titulo}

            </span>

            <h2>

                {valor}

            </h2>

        </div>

    );

}