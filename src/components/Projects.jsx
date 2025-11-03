import styles from "./Projects.module.css";
import Card from "./Card";
import { projectsData } from "./../data/projects";
import { smallProjectsData } from "../data/smallProjects";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projectsTranslate = t("projects", { returnObjects: true });

  const projectsMerged = projectsTranslate.main_projects.map((t, i) => ({
    ...t,
    ...projectsData[i],
  }));
  const smallProjectsMerged = projectsTranslate.small_projects.map((t, i) => ({
    ...t,
    ...smallProjectsData[i],
  }));

  return (
    <div className={styles.projectsContainer}>
      <h2>{t("projects.title1")}</h2>
      <section className={`${styles.projectsGrid} ${styles["three-col"]}`}>
        {projectsMerged.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </section>
      <h2>{t("projects.title2")}</h2>
      <section className={`${styles.projectsGrid} ${styles["two-col"]}`}>
        {smallProjectsMerged.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </section>
    </div>
  );
}
