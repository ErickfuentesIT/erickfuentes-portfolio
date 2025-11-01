import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1> {"<" + "ErickFuentes" + " />"}</h1>
      <section className={style.languageToggle}>
        <h2>EN</h2>
        <label className={style.switch}>
          <input type="checkbox" />
          <span className={style.slider}></span>
        </label>
        <h2>ES</h2>
      </section>
    </header>
  );
}
