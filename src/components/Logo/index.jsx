import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.icon}>S</div>

      <div>
        <h2>Setorizada</h2>
        <span>CCB</span>
      </div>
    </div>
  );
}