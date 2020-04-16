import React from "react";
import Reactions from "./Reactions";

function CurrentList({ output }) {
  const { location } = output || {};
  const { current } = output || {};
  const { forecast } = output || {};
  const { forecastday = [] } = forecast || {};

  // const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  // const date = new Date(forecastday.date);
  // let day = week[date.getDay()];

  return (
    <div>
      <section className="section">
        <div className="container">
          <h1>CURRENT CONDITIONS</h1>
          <h3>
            {location.name}, {output.location.region}
          </h3>
          <h3>{current.temp_f}</h3>
          <h3>{current.condition.text}</h3>
          <img src={current.condition.icon} alt="Current Condition"></img>
          <br />
          <Reactions />
        </div>
      </section>

      <h1>SEVEN DAY OUTLOOK</h1>
      <section className="section">
          <div className="tile is-ancestor">
            {forecastday.map((day, index) => (
                <div key={index}>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                      <h3>{day.date}</h3>
                      <br/>
                      <h3>High: {day.day.maxtemp_f}</h3>
                      <h3>Low: {day.day.mintemp_f}</h3>
                      <br/>
                      <h3>{day.day.condition.text}</h3>
                      <img
                        src={day.day.condition.icon}
                        alt="Current Condition"
                      ></img>
                      <br />
                      <Reactions />
                  </article>
                </div>
                </div>
            ))}
          </div>
      </section>
    </div>
  );
}

export default CurrentList;
