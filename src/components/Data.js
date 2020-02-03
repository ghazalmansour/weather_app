import React from 'react';

class Data extends React.Component {
    render() {
        return (
            <div className="Weather">
                <h1>
                    {this.props.city && this.props.country && (
                        <p>
                            Location: {this.props.city}, {this.props.country}
                        </p>
                    )}
                </h1>
                <h2>
                    {this.props.lon && this.props.lat && (
                        <p>
                            {' '}
                            longitude , latitude: {this.props.lon} ,{' '}
                            {this.props.lat}
                        </p>
                    )}
                </h2>
                <h3>
                    {this.props.temperature && this.props.feels_like && (
                        <p>
                            {' '}
                            Temperature: {this.props.temperature}, Feels Like:{' '}
                            {this.props.feels_like}{' '}
                        </p>
                    )}
                </h3>
                <h4>
                    {this.props.temp_max && this.props.temp_min && (
                        <p>
                            {' '}
                            Temp max/min: {this.props.temp_max}/
                            {this.props.temp_min}
                        </p>
                    )}
                </h4>
                <h5>
                    {this.props.humidity && this.props.description && (
                        <p>
                            {' '}
                            Humidity : {this.props.humidity},{' '}
                            {this.props.description}{' '}
                        </p>
                    )}
                </h5>
            </div>
        );
    }
}
export default Data;
