import { useState } from "react";
import styles from "./Projects.module.css";
import Card from "./Card";

const initialProjects = [
  {
    title: "Orkesta App",
    image: [
      "./carousel/orkesta/1.png",
      "./carousel/orkesta/2.png",
      "./carousel/orkesta/3.png",
    ],
    description:
      "A universitary project-focused to-do app designed to organize tasks, track progress, and keep workflow in sync. It can manage personal or team projects.",
    tags: [
      "JavaScript",
      "Next.js",
      "React Hook Form",
      "Spring Boot",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/ErickfuentesIT/orkesta-dps",
    projectDemoUrl: "https://orkesta-dps.vercel.app/app/login",
  },
  {
    title: "PopCorn Cinema",
    image: ["./carousel/PopCorn/1.png", "./carousel/PopCorn/2.png"],
    description:
      "A personal film log designed to keep track of movies watched, rate each title, and organize viewing history",
    tags: ["JavaScript", "React", "Responsive UI", "Vite"],
    githubUrl: "https://github.com/ErickfuentesIT/02-usepopcorn-cinema",
    projectDemoUrl: "https://02-usepopcorn-cinema.vercel.app/",
  },
  {
    title: "Travelling App",
    image: ["./carousel/WorldWise/1.png", "./carousel/WorldWise/2.png"],
    description:
      "An interactive travel log that allows users to mark places they ve visited on a worldmap and save personal notes. Designed tovisualize travel history and create apersonalized map of memories across the globe.",
    tags: [
      "JavaScript",
      "React",
      "React Router",
      "Context API",
      "CSS Modules",
      "Leaflet.js",
      "Vite",
    ],
    githubUrl: "https://github.com/ErickfuentesIT/react-worldwise-app",
    projectDemoUrl: "https://react-worldwise-app-three.vercel.app/",
  },
];

const initialSmallProjects = [
  {
    title: "A React Quiz",
    image: ["./carousel/ReactQuiz/1.png", "./carousel/ReactQuiz/2.png"],
    description:
      "A small interactive quiz with 15 questions about React fundamentals. It tracks the user’s score, provides instant feedback, and is designed to practice core concepts in a fun, lightweight format.",
    tags: ["JavaScript", "React", "Responsive UI", "Vite"],
    githubUrl: "https://github.com/ErickfuentesIT/the-react-quiz",
    projectDemoUrl: "https://the-react-quiz-tau.vercel.app/",
  },
  {
    title: "Bill Splitter",
    images: ["./carousel/BillSpliter/1.png", "./carousel/BillSpliter/2.png"],
    description:
      "A simple tool to track shared expenses with friends, showing who paid and who still owes money.",
    tags: ["JavaScript", "React", "Responsive UI", "Create React App"],
    githubUrl: "https://github.com/ErickfuentesIT/eat-n-split",
    projectDemoUrl: "https://eat-n-split-ten-self.vercel.app/",
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
