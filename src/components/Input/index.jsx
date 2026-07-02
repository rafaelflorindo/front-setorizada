import styles from "./Input.module.css";

export default function Input({

    label,

    name,

    value,

    onChange,

    type = "text",

    placeholder = "",

    required = false,

    disabled = false,

    error = ""

}) {

    return (

        <div className={styles.group}>

            {

                label &&

                <label htmlFor={name}>

                    {label}

                    {

                        required &&

                        <span className={styles.required}> *</span>

                    }

                </label>

            }

            <input

                id={name}

                name={name}

                type={type}

                value={value ?? ""}

                onChange={onChange}

                placeholder={placeholder}

                required={required}

                disabled={disabled}

                className={error ? styles.errorInput : ""}

            />

            {

                error &&

                <small className={styles.error}>

                    {error}

                </small>

            }

        </div>

    );

}