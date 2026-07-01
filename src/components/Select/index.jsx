import styles from "./Select.module.css";

export default function Select({

    label,

    name,

    value,

    options,

    onChange

}) {

    return (

        <div className={styles.group}>

            {label &&

                <label>{label}</label>

            }

            <select

                name={name}

                value={value}

                onChange={onChange}

            >

                {

                    options.map(opcao => (

                        <option

                            key={opcao.value}

                            value={opcao.value}

                        >

                            {opcao.label}

                        </option>

                    ))

                }

            </select>

        </div>

    );

}