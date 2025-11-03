import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import { experienceData } from "./data/experience";
import { educationData } from "./data/education";
import { useEffect, useState } from "react";

function App() {
  const { t, i18n } = useTranslation();
  const experienceTranslate = t("experience.jobs", { returnObjects: true });
  const educationTranslate = t("education.type", { returnObjects: true });
  // console.log(experienceTranslate);
  // console.log(experienceData);
  const [checked, setChecked] = useState(i18n.language.startsWith("es"));
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  useEffect(
    function () {
      i18n.changeLanguage(checked ? "es" : "en");
      setCurrentLanguage(i18n.language);
    },
    [checked, i18n]
  );

  function handleCheck(e) {
    setChecked(e.target.checked);
  }

  console.log(currentLanguage);

  return (
    <div className="container">
      <Header onCheck={handleCheck} />
      <Presentation currentLanguage={currentLanguage} />
      <AboutMe />
      <Marquee />
      <Experience
        experienceData={experienceData}
        translation={experienceTranslate}
        title={t("experience.title")}
      />
      <Projects />
      <Experience
        experienceData={educationData}
        translation={educationTranslate}
        title={t("education.title")}
      />
      <Footer />
    </div>
  );
}

export default App;
