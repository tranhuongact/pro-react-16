import React, { Component } from 'react';

export default class TodoBanner extends Component {
  render() {
    return (
      <h4 className="bg-primary text-white text-center p-2">
        {this.props.userName}'s To Do List
          ({this.props.todoItems.filter(item => !item.done).length} items to do)
        </h4>
    )
  }
}