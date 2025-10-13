import styles from "./Projects.module.css";

export default function Tag({ tag }) {
  return (
    <span className={styles.tag} key={tag}>
      {tag}
    </span>
  );
}
