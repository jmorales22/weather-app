import React from 'react';
import Reactions from './Reactions';
import { Columns, Column } from 'bloomer';


function CurrentList ({ output }) {

        const { location } = output || {};
        const { current } = output || {};
        const { forecast } = output || {};
        const { forecastday = [] } = forecast || {};

        // const week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        // const date = new Date(forecastday.date);
        // let day = week[date.getDay()];
      
        return (
            <div>
                 <Columns isCentered>
                 <Column>
                <h2>CURRENT CONDITIONS</h2>
                <h3>{location.name}, {output.location.region}</h3>
                <h3>{current.temp_f}</h3>
                <h3>{current.condition.text}</h3>
                <img src={current.condition.icon} alt="Current Condition"></img>
                <br/>
                <Reactions />
                </Column>
                </Columns>
                
                <h2>SEVEN DAY OUTLOOK</h2>
               <Columns>
                {forecastday.map((day, index) => (
                     <Column>
                    <div key={index}>
                        <h3>{day.date}</h3>
                        <h3>High: {day.day.maxtemp_f}</h3>
                        <h3>Low: {day.day.mintemp_f}</h3>
                        <h3>{day.day.condition.text}</h3>
                        <img src={day.day.condition.icon} alt="Current Condition"></img>
                        <br/>
                        <Reactions />
                    </div>
                    </Column>
                    ))}
                    </Columns>
            </div>
        );
    };

export default CurrentList;