import React, { Component } from 'react';
import Message from './Message';
import ActionButton from './ActionButton';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render() {
    return (
      <div>
        <Message theme="primary" message={`Counter: ${this.state.counter}`} />
        <ActionButton theme="secondary" text="Increment" />
      </div>
    )
  }
}
