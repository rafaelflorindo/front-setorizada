import styles from "./UsuarioCard.module.css";

export default function UsuarioCard({

    usuario,

    onEditar,

    onExcluir

}) {

    return (

        <div className={styles.card}>

            <div>

                <h2>{usuario.nome}</h2>

                <span>{usuario.tipo}</span>

            </div>

            <div className={styles.info}>

                <p>

                    <strong>Instrumento:</strong>

                    {usuario.instrumento}

                </p>

                <p>

                    <strong>Telefone:</strong>

                    {usuario.telefone}

                </p>

                <p>

                    <strong>Congregação:</strong>

                    {usuario.comumCongregacao}

                </p>

            </div>

            <div className={styles.buttons}>

                <button

                    onClick={() => onEditar(usuario)}

                >

                    Editar

                </button>

                <button

                    className={styles.delete}

                    onClick={() => onExcluir(usuario.id)}

                >

                    Excluir

                </button>

            </div>

        </div>

    );

}