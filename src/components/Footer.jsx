import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <p>®️ {currentYear} by erickfuentes v1.0.0</p>
      <p>Made with 💙🤍 from Santa Tecla, El Salvador</p>
    </footer>
  );
}
