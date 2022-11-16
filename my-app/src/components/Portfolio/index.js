import React from "react";
import noteTakerImage from "../../assets/small/notetaker.png";
import portfolioImage from "../../assets/small/portfolio.png";
import weatherAppImage from "../../assets/small/weather-app.png";
import workDayScheduleImage from "../../assets/small/work-day-schedule.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">My Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://laurenp305.github.io/note-taker-challenge-11/">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="note-taker-app"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker App</h4>
              <p>
              This application allows the user to create, save, and delete notes. 
              Notes appear on the lefthand side bar as users save them.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://laurenp305.github.io/portfolio/">
                {" "}
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="portfolio"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>My Portfolio</h4>
              <p>
              This is my portfolio, which contains an image, navigation, 
              and several sections users can get to when they click on naviation options.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://laurenp305.github.io/weather-app/">
                {" "}
                <img
                  src={twilightImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="weather_app"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather App</h4>
              <p>
              This Weather App allows users to find the current weather and 5 day forecast for a city. Users type in the city name, hit search, and are presented with the date, temperature, wind speed, description, and icon depicting the weather for the day. 
              They will also be presented with a 5 day forecast for the same city.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://laurenp305.github.io/justin-thyme/">
                {" "}
                <img
                  src={homeBrewImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HomeBrew"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Work Day Schedule</h4>
              <p>
              This is a work day scheduler that allows users to store any items according to the time for the day. 
              For example, if the user wanted to add a 4 pm doctor's appointment on their calendar for the day, they can type it in the appropriate time slot and save the information. 
              Users won't have to worry about losing any information if they refresh the page, as any items saved are stored unless the "clear fields" button is used to clear all items. 
              Each time slot for the day is highlighted in one of three colors: green for current hour, red for future hours, and gray for past hours.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;