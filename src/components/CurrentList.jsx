import React from 'react';

function CurrentList ({ output }) {

        const { forecast } = output || {};
        const { forecastday = [] } = forecast || {};

        // const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        // const date = new Date(forecastday.date);
        // let day = week[date.getDay()];
      
        return (
            <div>
                <h2>CURRENT CONDITIONS</h2>
                <h3>{output.location.name}, {output.location.region}</h3>
                <h3>{output.current.temp_f}</h3>
                <h3>{output.current.condition.text}</h3>
                <img src={output.current.condition.icon} alt="Current Condition"></img>
                <br/>
                <h2>SEVEN DAY OUTLOOK</h2>
                {forecastday.map((day, index) => (
                    <div key={index}>
                        <h3>{day.date}</h3>
                        <h3>{day.day.maxtemp_f}</h3>
                        <h3>{day.day.mintemp_f}</h3>
                        <h3>{day.day.condition.text}</h3>
                        <img src={day.day.condition.icon} alt="Current Condition"></img>
                        <br/>
                    </div>
                    ))}
            </div>
        );
    };

export default CurrentList;