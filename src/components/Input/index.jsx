import styles from "./Input.module.css";

export default function Input({

    label,

    name,

    value,

    onChange,

    type = "text",

    placeholder = ""

}) {

    return (

        <div className={styles.group}>

            {label &&

                <label>

                    {label}

                </label>

            }

            <input

                type={type}

                name={name}

                value={value ?? ""}

                onChange={onChange}

                placeholder={placeholder}

            />

        </div>

    );

}