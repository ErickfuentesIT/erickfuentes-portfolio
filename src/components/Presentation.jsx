import { useTranslation } from "react-i18next";
import style from "./Presentation.module.css";

export default function Presentation({ currentLanguage }) {
  const { t } = useTranslation();
  return (
    <div className={style.presentationContainer}>
      <section className={style.avatar}>
        <img src="FotosErick-1.jpg" alt="" />
      </section>
      <section className={style.information}>
        <h3>{t("presentation.hello")}</h3>
        <h1>Erick Eduardo Fuentes</h1>
        <h3>{t("presentation.position")}</h3>
        <h3>{t("presentation.place")}</h3>
        <hr />
        <div className={style.socialMediaIcons}>
          <a
            href="https://www.linkedin.com/in/erick-fuentes-it-developer"
            target="_blank"
          >
            <img src="linkedin.png" alt="" />
          </a>
          <a href="https://github.com/ErickfuentesIT" target="_blank">
            <img src="GitHub.png" alt="" />
          </a>
        </div>
        <a
          href={
            currentLanguage === "en"
              ? "EN_ErickFuentes_CV.pdf"
              : "ES_ErickFuentes_CV.pdf"
          }
          className={style.cvButton}
          download
        >
          {t("presentation.button")}
        </a>
      </section>
    </div>
  );
}
