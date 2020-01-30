import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div className="Weather" > 
               {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && this.props.feels_like && <p> Temperature: {this.props.temperature},  Feels Like: {this.props.feels_like} </p>}
                {this.props.temp_max && this.props.temp_min && <p> Temp max/min: {this.props.temp_max}/{this.props.temp_min}</p>}
                {this.props.humidity && <p>Humidity : {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
            </div>
        );
    }
};
export default Weather;