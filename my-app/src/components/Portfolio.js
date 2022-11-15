import React from "react";
import Project from "./Project";

const projects = [
    {
        id: 1,
        title: "Note Taker App",
        languages: "html, css, js",
        packages: "Express.js, Generate Unique IDs",
        image: "/img/notetaker.png",
        description: "Write, save, and delete notes.",
        repo: "https://github.com/laurenp305/note-taker-challenge-11",
        live: "https://blooming-plateau-28796.herokuapp.com/",
      },
{
    id: 2,
    title: "Basic Portfolio",
    languages: "html, css",
    packages: "none",
    image: "/img/portfolio.png",
    description: "A basic work portfolio that displays all my work.",
    repo: "https://github.com/laurenp305/portfolio",
    live: "https://laurenp305.github.io/portfolio/",
  },
  {
    id: 3,
    title: "Workday Scheduler",
    languages: "html, css, js",
    packages: "jquery API, bootstrap API",
    image: "/img/work-day-schedule.png",
    description: "Allows users to fill in their workday schedule.",
    live: "https://laurenp305.github.io/justin-thyme/",
    repo: "https://github.com/laurenp305/justin-thyme",
  },
  {
    id: 4,
    title: "Weather App",
    languages: "html, css, js",
    packages: "bootstrap",
    image: "/img/weather-app.png",
    description: "A basic app that allows you to see the weather for a specific searched or saved city as well as a five-day forecast.",
    repo: "https://github.com/laurenp305/weather-app",
    live: "https://laurenp305.github.io/weather-app/",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;