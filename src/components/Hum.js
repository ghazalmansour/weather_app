import React from 'react';

class Hum extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather} className="mid">
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <button>Weather City2 </button>
            </form>
        );
    }
}
export default Hum;
