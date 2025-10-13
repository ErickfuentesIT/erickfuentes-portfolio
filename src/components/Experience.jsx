import styles from "./Experience.module.css";

export default function Experience({ experience, title }) {
  return (
    <section className={styles.wrapper}>
      <h2>{title}</h2>
      {experience.map((exp) => (
        <>
          <header className={styles.company}>
            <img src={exp.logo} alt="pbs" />
            <div className={styles["vertical-divider"]}></div>
            <div>
              <h2>{exp.place}</h2>
              <span>{exp.time}</span>
            </div>
          </header>
          {exp.summary.map((summary) => (
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
          ))}
        </>
      ))}
    </section>
  );
}
