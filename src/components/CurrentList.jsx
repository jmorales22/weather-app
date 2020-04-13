import React from 'react';

function AnswerList (props) {

        const { output } = props;
      
        return (
            <div>
                <h1>CURRENT CONDITIONS</h1>
                <h3>{output.location.name}</h3>
                <h3>{output.current.temp_f}</h3>
                <h3>{output.current.condition.text}</h3>
                <img src={output.current.condition.icon} alt="Current Condition"></img>
                <br/>
          </div>
        );
      };

export default AnswerList;