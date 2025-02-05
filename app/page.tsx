import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.sun}>
          <div className={styles.sunFade}></div>
        </div>
        <div className={styles.field}></div>
      </div>
    </div>
  );
}
