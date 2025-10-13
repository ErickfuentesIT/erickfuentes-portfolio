import styles from "./Projects.module.css";
import Tag from "./Tag";
export default function Card({ project }) {
  return (
    <div className={styles.card} key={project.title}>
      <div className={styles.cardContent}>
        <img src={project.image}></img>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <div className={styles.cardFooter}>
          <a href={project.githubUrl} target="_blank">
            <img src="GitHub.png" alt="" />
          </a>
          <a href={project.githubUrl} target="_blank">
            <img src="world-icon.webp" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
