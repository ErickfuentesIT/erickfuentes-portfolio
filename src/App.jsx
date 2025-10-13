import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Presentation from "./components/Presentation";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const experienceObject = [
  {
    logo: "Logo_PBS_Web_2.jpg",
    place: "PBS El Salvador",
    time: "FEB. 2024 - Currently",
    summary: [
      {
        title: "Junior Front-end Developer",
        description:
          "I have been working with Atlantida Insurance in Honduras, developing a digital onboarding platform for their customers and a back-office system to manage data. This experience strengthened my teamwork skills and improved cross-functional communication to deliver successful solutions.",
      },
      {
        title: "Quadient Data Analyst",
        description:
          "As a Data Analyst and Quadient Developer, I designed and optimizedautomated workflows for high-volume document production, ETL forfinancial/government data, and database solutions in PostgreSQL. I also built internal JS/REST tools and integrated Mailjet forlarge-scale distribution while providing technical support to keyfinancial clients (accuracy, performance and service continuity).",
      },
    ],
  },
];

const educationObject = [
  {
    logo: "udb.jpg",
    place: "Don Bosco University",
    time: "2022 - Currently",
    summary: [
      {
        title: "Computer Science Engineering",
        period: "2024 - Currently",
        description:
          "Currently pursuing an Engineering degree, strengthening algorithms, data structures, OOP, SQL, computer networks, operating systems (Windows/Linux), software engineering (Git, testing, Agile), and web development with React.",
      },
      {
        title: "Computer Technician Degree",
        period: "2022 - 2024",
        description:
          "I built a solid foundation in computer science: algorithms, data structures, object-oriented programming, SQL, and operating systems (Windows Server and Linux-based).",
      },
    ],
  },
  {
    logo: "udemy-light.png",
    place: "Udemy",
    time: "Jul. 2025 - Currently",
    summary: [
      {
        title:
          "The Ultimate React Course 2025: React, Next.js, Redux & More with Jonas Schmedtmann",
        period: "2025 - Currently",
        description:
          "I’ve been taking a React crash course to build up from basics to advanced skills—learning hooks, state management, context, effects, performance optimization, and how to use the React DevTools (component tree and profiler).",
      },
    ],
  },
];

function App() {
  const [experience] = useState(experienceObject);
  const [education] = useState(educationObject);

  return (
    <div className="container">
      <Header />
      <Presentation />
      <AboutMe />
      <Marquee />
      <Experience experience={experience} title="Experience 💼" />
      <Projects />
      <Experience experience={education} title="Education 📚" />
      <Footer />
    </div>
  );
}

export default App;
