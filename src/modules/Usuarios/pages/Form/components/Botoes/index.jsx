import Button from "@components/Button";

import styles from "./Botoes.module.css";

export default function Botoes({

    cancelar,

    salvar

}) {

    return (

        <div className={styles.container}>

            <Button

                variant="secondary"

                onClick={cancelar}

            >

                Cancelar

            </Button>

            <Button

                type="submit"

                onClick={salvar}

            >

                Salvar

            </Button>

        </div>

    );

}