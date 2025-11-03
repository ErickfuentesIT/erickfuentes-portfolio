import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <p>
        ®️ {currentYear} {t("footer.made_by")} v1.1.0
      </p>
      <p>{t("footer.from")}</p>
    </footer>
  );
}
