import React from "react";
import CurrentList from "./CurrentList";

function CurrentWeather(props) {
  const { output } = props;

  return (
    <div>
      {output.map((output, key) => (
        <CurrentList output={output} key={key} />
      ))}
    </div>
  );
}

export default CurrentWeather;
