import { HiBars3 } from "react-icons/hi2";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <button className={styles.button}>
        <HiBars3 size={24} />
      </button>

      <div className={styles.user}>
        Rafael
      </div>
    </header>
  );
}