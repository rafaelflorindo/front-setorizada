import styles from "./UsuarioCard.module.css";

export default function UsuarioCard({

    usuario,

    onEditar,

    onExcluir

}){

    return(

        <div className={styles.card}>

            <h2>{usuario.nome}</h2>

            <p>

                {usuario.tipo}

            </p>

            <p>

                {usuario.instrumento}

            </p>

            <div className={styles.buttons}>

                <button onClick={onEditar}>

                    Editar

                </button>

                <button onClick={onExcluir}>

                    Excluir

                </button>

            </div>

        </div>

    )

}