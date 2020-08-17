import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 4
    }
  }

  isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd"
  }

  getClassName(number) {
    return number % 2 === 0
      ? "bg-primary text-white text-center p-2 m-1"
      : "bg-secondary text-white text-center p-2 m-1"
  }

  handleChange = () => {
    this.setState({
      count : this.state.count + 1
    })
  }

  render = () =>
    <div>
      <h4 className={this.getClassName(this.state.count)}>
        Number of things: {this.isEven(this.state.count)}
      </h4>
      <button className="btn btn-info m-2" onClick={this.handleChange}>Change Number</button>
    </div>
}
