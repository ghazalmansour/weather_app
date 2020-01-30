import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component{
  state = {
    temperature: undefined,
    feels_like: undefined,
    temp_min: undefined,
    temp_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  seeWeather =  (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`)
      .then(res => res.json())
      .then((data) => {
        this.setState({
          temperature: data.main.temp,
          feels_like: data.main.feels_like,
          temp_min: data.main.temp_min,
          temp_max: data.main.temp_max,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
         });
      })
      .catch(console.log)
      //console.log ('HelloWorld')
}
  
  
  render (){
    return (
      <div className="app"> 
        <Titles />
        <Form seeWeather={this.seeWeather}/>
        <Weather 
        temperature ={this.state.temperature}
          feels_like={this.state.feels_like}
          temp_min ={this.state.temp_min}
          temp_max = {this.state.temp_max}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
};
export default App;
