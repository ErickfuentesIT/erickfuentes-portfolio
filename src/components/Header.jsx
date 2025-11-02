import { useTranslation } from "react-i18next";
import style from "./Header.module.css";
import { useEffect, useState } from "react";

export default function Header() {
  const { i18n } = useTranslation();
  const [cheked, setChecked] = useState(i18n.language.startsWith("en"));

  useEffect(
    function () {
      i18n.changeLanguage(cheked ? "es" : "en");
    },
    [cheked, i18n]
  );

  return (
    <header className={style.header}>
      <h1> {"<" + "ErickFuentes" + " />"}</h1>
      <section className={style.languageToggle}>
        <img src="./flags/united-states.png" alt="usa-flag" />
        <label className={style.switch}>
          <input
            type="checkbox"
            on
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span className={style.slider}></span>
        </label>
        <img src="./flags/spain.png" alt="usa-flag" />
      </section>
    </header>
  );
}
