import style from "./Presentation.module.css";

export default function Presentation() {
  return (
    <div className={style.presentationContainer}>
      <section className={style.avatar}>
        <img src="FotosErick-1.jpg" alt="" />
      </section>
      <section className={style.information}>
        <h3>Hello ✌, I am</h3>
        <h1>Erick Eduardo Fuentes</h1>
        <h3>Front-end Developer / Data Analyst</h3>
        <h3>
          At <strong>PBS El Salvador</strong>
        </h3>
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
        <a href="EN_ErickFuentes_CV.pdf" className={style.cvButton} download>
          Download CV
        </a>
      </section>
    </div>
  );
}
