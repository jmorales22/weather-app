import React from "react";
import Reactions from "./Reactions";

function CurrentList({ output }) {
  const { location } = output || {};
  const { current } = output || {};
  const { forecast } = output || {};
  const { forecastday = [] } = forecast || {};

  const week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1 className="location">
            {location.name}, {output.location.region}
          </h1>
          <br />
          <h1 className="currentOutlook">CURRENT CONDITIONS</h1>
          <br />
          <h3>{current.temp_f}</h3>
          <h3>{current.condition.text}</h3>
          <img src={current.condition.icon} alt="Current Condition"></img>
          <br />
          <Reactions />
        </div>
      </section>

      <h1 className="currentOutlook">SEVEN DAY OUTLOOK</h1>
      <section className="section">
        <div className="tile is-ancestor">
          {forecastday.map((day, index) => {
            const date = new Date(day.date);
            const dayOfTheWeek = week[date.getDay()];
            return (
              <div key={index}>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <h3>{dayOfTheWeek}</h3>
                    <h3>{day.date}</h3>
                    <br />
                    <h3>High: {day.day.maxtemp_f}</h3>
                    <h3>Low: {day.day.mintemp_f}</h3>
                    <br />
                    <h3>{day.day.condition.text}</h3>
                    <img
                      src={day.day.condition.icon}
                      alt="Current Condition"
                    ></img>
                    <br />
                    <br />
                    <Reactions />
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default CurrentList;
