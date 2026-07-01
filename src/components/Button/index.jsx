import styles from "./Button.module.css";

export default function Button({

    children,

    type = "button",

    onClick,

    variant = "primary"

}) {

    return (

        <button

            type={type}

            onClick={onClick}

            className={`${styles.button} ${styles[variant]}`}

        >

            {children}

        </button>

    );

}