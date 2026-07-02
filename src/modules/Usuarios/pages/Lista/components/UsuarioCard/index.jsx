import Button from "@components/Button";

import styles from "./UsuarioCard.module.css";

export default function UsuarioCard({

    usuario,

    onEditar,

    onExcluir

}) {

    return (

        <div className={styles.card}>

            <div>

                <h3>{usuario.nome}</h3>

                <p>

                    <strong>Tipo:</strong> {usuario.tipo}

                </p>

                <p>

                    <strong>Instrumento:</strong> {usuario.instrumento}

                </p>

                <p>

                    <strong>Telefone:</strong> {usuario.telefone}

                </p>

            </div>

            <div className={styles.acoes}>

                <Button

                    onClick={onEditar}

                >

                    Editar

                </Button>

                <Button

                    variant="danger"

                    onClick={onExcluir}

                >

                    Excluir

                </Button>

            </div>

        </div>

    );

}