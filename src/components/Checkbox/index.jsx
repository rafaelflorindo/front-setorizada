import styles from './Checkbox.module.css'

export default function Checkbox({

    label,

    name,

    checked,

    onChange

}) {

    return (

        <label className={styles.checkbox}>

            <input

                type="checkbox"

                name={name}

                checked={checked}

                onChange={onChange}

            />

            {label}

        </label>

    );

}