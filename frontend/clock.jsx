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
    const date = time.toString().split(' ').slice(0, 4).join(' ');
    return (
      <div className="clock">
        <h1>This is a Clock</h1>
        <section className="clock_time">
          <h2 className="clock_header">Time: </h2><p> {time.getHours()}:{time.getMinutes()}:{time.getSeconds()} PDT</p>
        </section>
        <section className="clock_date">
          <h2 className="clock_header">Date: </h2><p> {date}</p>
        </section>
      </div>
    );
  }
}

export default Clock;