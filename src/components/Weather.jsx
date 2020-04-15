import React, {Component} from 'react';
import CurrentWeather from './CurrentWeather';
import '../App.css';

class Weather extends Component {
  state = {
    value: '',
    output: [],
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = async event => {
        event.preventDefault();

        try{
        const params = this.state.value;
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${params}&days=8`);
        const data = await response.json();
        console.log("this is the data", data)

        this.setState({
        value: '',
        output: [data]
        });
        }
        catch(error) {
            return alert("Please enter new zip code");
    }
};

  render() {
    const { value, output } = this.state;

    return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <input type='text' data-testid="messageText" placeholder="Enter Your Zip Code" onChange={this.handleChange} value={value}/>
            <button type='submit' data-testid="submitButton">Submit</button> 
            </form>
            <CurrentWeather output={output}/>
        </div>
      );
    }
  }

export default Weather;

