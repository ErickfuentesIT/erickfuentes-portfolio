import styles from "./Experience.module.css";

export default function ExperienceSummary({ summary }) {
  return (
    <>
      <details className={styles.item} close>
        <summary className={styles.summary}>
          <div className={styles.headings}>
            <h3>{summary.title}</h3>
            <small>{summary.period}</small>
          </div>
          <span className={styles.chevron} aria-hidden="true" />
        </summary>

        <div className={styles.content}>
          <div>
            <p>{summary.description}</p>
          </div>
        </div>
      </details>
    </>
  );
}
