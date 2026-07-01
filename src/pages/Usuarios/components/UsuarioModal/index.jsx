import styles from "./UsuarioModal.module.css";

export default function UsuarioModal({

    aberto,

    titulo,

    children,

    onClose

}){

    if(!aberto) return null;

    return(

        <div className={styles.overlay}>

            <div className={styles.modal}>

                <div className={styles.header}>

                    <h2>{titulo}</h2>

                    <button onClick={onClose}>

                        ✕

                    </button>

                </div>

                <div className={styles.body}>

                    {children}

                </div>

            </div>

        </div>

    )

}