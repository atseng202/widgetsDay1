import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: "",  visibleNames: this.props.names};

    this.inputEntered = this.inputEntered.bind(this);
    this.nameClicked = this.nameClicked.bind(this);
  }

  inputEntered(event) {
    event.preventDefault();
    const inputVal = event.currentTarget.value;
    const newNames = this.props.names.filter(name => name.includes(inputVal));
    this.setState({inputVal, visibleNames: newNames});
  }

  nameClicked(event) {
    event.preventDefault();
    const inputVal = event.currentTarget.textContent;
    // const newNames = this.props.names.filter(name => name.includes(inputVal));
    this.setState({ inputVal, visibleNames: [inputVal] });
  }

  render() {
    // const that = this;
    return (
      <section className="autocomplete-container">
        <input type="text" value={this.state.inputVal} onChange={this.inputEntered}/>
        <ul>
          {this.state.visibleNames.map((name, idx) => <li onClick={this.nameClicked} key={idx}>{name}</li> )}
        </ul>
      </section>
    );
  }
}

export default Autocomplete;