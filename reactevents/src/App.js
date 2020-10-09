import React from 'react';
import './App.css';
import ThemeButton from './ThemeButton'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Ready",
      counter: 0,
      theme: 'info',
      theme1: 'info',
      message1: ''
    }
  }

  handleEvent = (e, newTheme) => {
    console.log("handle method invoked", e.type, e.target.innerText)
    e.persist();
    this.setState({
      counter: this.state.counter + 1,
      theme: newTheme
    },
      () => this.setState({ message: `${e.type}: ${this.state.counter}` })
    );
  }

  toggleCheckbox = (e) => {
    if (this.state.counter === 2) {
      e.preventDefault();
    }
  }

  selectTheme = (newTheme) => {
    this.setState({
      theme1: newTheme,
      message1: `Theme: ${newTheme}`
    })
  }

  render() {
    return (
      <div>
        <div className="m-2">
          <div className={`h4 bg-${this.state.theme} text-white text-center p-2`}>
            {this.state.message}
          </div>
          <div className="text-center">
            <button className="btn btn-primary"
              onClick={(e) => this.handleEvent(e, "primary")}>
              Normal
            </button>
            <button className="btn btn-danger m-1"
              onMouseUp={(e) => this.handleEvent(e, "info")}
              onMouseDown={(e) => this.handleEvent(e, "danger")}>
              Danger
            </button>
          </div>
          <div className='form-check'>
            <input className="form-check-input" type="checkbox"
              onClick={this.toggleCheckbox} />
            <label>Click button to prevent checkbox click events when counter = 2</label>
          </div>
        </div>

        <ThemeButton theme="secondary" callback={this.selectTheme} />
        <ThemeButton theme="light" callback={this.selectTheme} />
      </div>
    )
  }
}

export default App;
