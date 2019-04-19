import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({time: new Date()});
  }

  componentDidMount() {
    this.intervalID = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    const {time} = this.state;
    return (
      <div>
        <h1>This is a Clock</h1>
        <p>Hour: {time.getHours()}</p>
        <p>Minutes: {time.getMinutes()}</p>
        <p>Seconds: {time.getSeconds()}</p>
      </div>
    );
  }
}

export default Clock;