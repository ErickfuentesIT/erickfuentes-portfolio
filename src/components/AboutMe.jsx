import style from "./AboutMe.module.css";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <div className={style.aboutMeContainer}>
      <h2>{t("about_me.title")}</h2>
      <p>{t("about_me.description")}</p>
    </div>
  );
}
