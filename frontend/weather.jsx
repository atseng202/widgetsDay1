import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.posCallback = this.posCallback.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.posCallback, this.posError);
    // { timeout: 10000 }
  }

  posError(posErrorObj) {
    console.log(posErrorObj);
  }

  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
  posCallback(pos) {
    const coordinates = pos.coords;
    const long = coordinates.longitude;
    const lat = coordinates.latitude;
    const http = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=4b6730a7113a2cfdb61269cd7b0ec417`;

    // Sending request via XMLHTTPRequest
    const xHR = new XMLHttpRequest(), 
      method = 'GET',
      url = `${http}`;
    xHR.open(method, url, true);
    xHR.onload = () => {
      const data = JSON.parse(xHR.response);
      let { main: {temp}, name} = data;
      this.setState({temp: ((parseInt(temp) -32) / 1.8), name})
    };

    xHR.send();

    // Sending a request with Fetch API
    // let jsonCB = function (response) {
    //   return response.json();
    // };

    // let setWeather = function ({ main: { temp }, name }) {
    //   this.setState({ temp: ((parseInt(temp) - 32) / 1.8), name });
    // };

    // setWeather = setWeather.bind(this);
    // fetch(http).then(jsonCB).then(setWeather);
  }

  render() {
    if (this.state.temp) {
      return (
        <div className="weather">
          <p>{this.state.temp}ºF</p>
          <p>{this.state.name}</p>
        </div>
      );
    } else {
      return (
        <div className="weather">
          <p>Fetching Weather...</p>
        </div>
      );
    }

  }
}

export default Weather;