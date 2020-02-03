import React from 'react';
import Head from './components/Head';
import Form from './components/Form';
import Data from './components/Data';
import Hum from './components/Hum';

const API_KEY = process.env.REACT_APP_WEATHER_KEY;

// Hou comment: as an additional challenge, you could refactor this application to use React hooks
class App extends React.Component {
    state = {
        temperature: undefined,
        feels_like: undefined,
        temp_min: undefined,
        temp_max: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        lon: undefined,
        lat: undefined,
        error: undefined
    };
    //refrence https://www.w3schools.com/REACT/react_state.asp

    // Hou comment: spell out the argument fully
    seeWeather = event => {
        event.preventDefault();

        // Hou comment: you could store e.target.elements in a variable for reuse on lines 30-31
        // const target = event.target.elements;
        const city = event.target.elements.city.value;
        const country = event.target.elements.country.value;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`
        )
            .then(res => res.json())
            .then(data => {
                // Hou comment: use destructuring
                const { coord, main, name, sys, weather } = data;
                this.setState({
                    lon: coord.lon,
                    lat: coord.lat,
                    temperature: main.temp,
                    feels_like: main.feels_like,
                    temp_min: main.temp_min,
                    temp_max: main.temp_max,
                    city: name,
                    country: sys.country,
                    humidity: main.humidity,
                    description: weather[0].description,
                    error: ''
                });
            })
            .catch(console.log);
    };

    //refrence https://pusher.com/tutorials/consume-restful-api-react

    getWeather = event => {
        event.preventDefault();
        // Hou comment: you could store e.target.elements in a variable for reuse on lines 63-64
        // const target = e.target.elements;
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`
        )
            .then(res => res.json())
            .then(data => {
                this.setState({
                    // Hou comment: can similarly use destructuring here like what we did above on line 38
                    lon: data.coord.lon,
                    lat: data.coord.lat,
                    temperature: data.main.temp,
                    feels_like: data.main.feels_like,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    city: data.name,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ''
                });
            })
            .catch(console.log);
    };

    render() {
        return (
            <div className="app">
                <Head />
                <Form seeWeather={this.seeWeather} />
                <Hum getWeather={this.getWeather} />
                <Data
                    lon={this.state.lon}
                    lat={this.state.lat}
                    temperature={this.state.temperature}
                    feels_like={this.state.feels_like}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                />
            </div>
        );
    }
}
export default App;
