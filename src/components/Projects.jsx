import { useState } from "react";
import styles from "./Projects.module.css";
import Card from "./Card";

const initialProjects = [
  {
    title: "Orkesta App",
    image: "GitHub.png",
    description:
      "A project-focused to-do app designed to organize tasks, track progress, and keep workflow in sync. It can manage personal or team projects.",
    tags: ["Next.JS", "SpringBoot", "JavaScript"],
    githubUrl: "https://github.com/ErickfuentesIT/orkesta-dps",
    projectDemoUrl: "",
  },
  {
    title: "PopCorn Cinema",
    image: "GitHub.png",
    description:
      "A personal film log designed to keep track of movies watched, rate each title, and organize viewing history",
    tags: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/ErickfuentesIT/02-usepopcorn-cinema",
    projectDemoUrl: "",
  },
  {
    title: "Travelling App",
    image: "GitHub.png",
    description:
      "An interactive travel log that allows users to mark places they ve visited on a worldmap and save personal notes. Designed tovisualize travel history and create apersonalized map of memories across the globe.",
    tags: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/ErickfuentesIT/react-worldwise-app",
    projectDemoUrl: "",
  },
];

const initialSmallProjects = [
  {
    title: "A React Quiz",
    image: "GitHub.png",
    description:
      "A small interactive quiz with 15 questions about React fundamentals. It tracks the user’s score, provides instant feedback, and is designed to practice core concepts in a fun, lightweight format.",
    tags: ["Next.JS", "SpringBoot", "JavaScript"],
    githubUrl: "https://github.com/ErickfuentesIT/the-react-quiz",
    projectDemoUrl: "",
  },
  {
    title: "Bill Splitter",
    image: "GitHub.png",
    description:
      "A simple tool to track shared expenses with friends, showing who paid and who still owes money.",
    tags: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/ErickfuentesIT/eat-n-split",
    projectDemoUrl: "",
  },
];

export default function Projects() {
  const [projects] = useState(initialProjects);
  const [smallProjects] = useState(initialSmallProjects);
  return (
    <div className={styles.projectsContainer}>
      <h2>Projects 🖥️</h2>
      <section className={`${styles.projectsGrid} ${styles["three-col"]}`}>
        {projects.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </section>
      <h2>Small Projects 🖥️</h2>
      <section className={`${styles.projectsGrid} ${styles["two-col"]}`}>
        {smallProjects.map((project) => (
          <Card project={project} key={project.title} />
        ))}
      </section>
    </div>
  );
}
