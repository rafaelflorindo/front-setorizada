import styles from "./Badge.module.css";

export default function Badge({ tipo, children }) {

    return (

        <span className={`${styles.badge} ${styles[tipo]}`}>

            {children}

        </span>

    );

}