import style from "./Header.module.css";

export default function Header({ onCheck }) {
  return (
    <header className={style.header}>
      <h1> {"<" + "ErickFuentes" + " />"}</h1>
      <section className={style.languageToggle}>
        <img src="./flags/united-states.png" alt="usa-flag" />
        <label className={style.switch}>
          <input type="checkbox" on onChange={onCheck} />
          <span className={style.slider}></span>
        </label>
        <img src="./flags/spain.png" alt="usa-flag" />
      </section>
    </header>
  );
}
