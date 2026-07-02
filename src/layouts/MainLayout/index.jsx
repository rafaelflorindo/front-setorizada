import styles from "./Header.module.css";

export default function Header() {

    const hoje = new Date().toLocaleDateString("pt-BR");

    return (

        <header className={styles.header}>

            <div>

                <h2>Sistema da Setorizada</h2>

                <small>{hoje}</small>

            </div>

        </header>

    );

}