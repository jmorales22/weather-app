import React, { Component } from "react";
import CurrentWeather from "./CurrentWeather";
import "../App.css";

class Weather extends Component {
  state = {
    value: "",
    output: [],
    shown: {},
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  validateZipCode = (elementValue) => {
    const zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/;
    return zipCodePattern.test(elementValue);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const testZip = this.validateZipCode(this.state.value);
    if (!!testZip) {
      const params = this.state.value;
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${params}&days=9`
      );
      const data = await response.json();
      console.log("this is the data", data);

      this.setState({
        value: "",
        output: [data],
      });
    } else {
      return alert("Please enter a valid zip code");
    }
  };

  render() {
    const { value, output } = this.state;

    return (
      <div>
        <div className="entry">
          <h1 className="title is-1">React to Weather 😀</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              data-testid="messageText"
              placeholder="Enter Your Zip Code"
              onChange={this.handleChange}
              value={value}
            />
            <button className="submit" type="submit" data-testid="submitButton">
              Submit
            </button>
          </form>
        </div>
        <CurrentWeather output={output} />
      </div>
    );
  }
}

export default Weather;
