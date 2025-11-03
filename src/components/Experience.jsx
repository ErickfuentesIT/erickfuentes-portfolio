import styles from "./Experience.module.css";
import ExperienceSummary from "./ExperienceSummary";

export default function Experience({ experienceData, title, translation }) {
  const dataMerged = translation.map((t, i) => ({
    ...t,
    ...experienceData[i],
  }));
  return (
    <section className={styles.wrapper}>
      <h2>{title}</h2>
      {dataMerged.map((exp) => (
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
            <ExperienceSummary summary={summary} key={summary.title} />
          ))}
        </>
      ))}
    </section>
  );
}
