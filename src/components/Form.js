import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.seeWeather} className="mid">
                <input type="text" name="city" placeholder="City" />
                <input type="text" name="country" placeholder="Country" />
                <button>Weather City1 </button>
            </form>
        );
    }
}
export default Form;
