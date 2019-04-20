import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: 'Fetching Weather...'
    };
    this.posCallback = this.posCallback.bind(this);
  }

  componentDidMount() {
    debugger;
    navigator.geolocation.getCurrentPosition(this.posCallback, this.posError, {timeout: 10000});
  }

  posError(posErrorObj) {
    debugger;
    alert('error');
    console.log(posErrorObj);
  }

  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
  posCallback(pos) {
    debugger;
    const coordinates = pos.coords;
    const long = coordinates.longitude;
    const lat = coordinates.latitude;
    const http = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=4b6730a7113a2cfdb61269cd7b0ec417`;
    let setWeather = function(response) {
      // {main: {temp}, sys: {country}}

      // {temp: temp, country: country}
      this.setState({weather: response});
    };
    setWeather = setWeather.bind(this);
    fetch(http).then(setWeather);
  }

  render() {
    // In the weather component we should add an initial state for "loading..."

    // if (this.state.weather) {
    //   return (
    //     <div>
    //       <p>{this.state.weather}</p>
    //     </div>
    //   );
    // }
    // else {
    //   return (
    //     <div>
    //       <p>Fetching Weather...</p>
    //     </div>
    //   );
    // }

    return (
      <div>
        <p>{this.state.weather}</p>
      </div>
    );
  }
}

export default Weather;