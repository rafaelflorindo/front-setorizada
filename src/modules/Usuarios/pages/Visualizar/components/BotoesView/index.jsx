import Button from "@components/Button";

import styles from "./BotoesView.module.css";

export default function BotoesView({

    voltar,

    editar

}){

    return(

        <div className={styles.buttons}>

            <Button

                variant="secondary"

                onClick={voltar}

            >

                Voltar

            </Button>

            <Button

                onClick={editar}

            >

                Editar

            </Button>

        </div>

    );

}