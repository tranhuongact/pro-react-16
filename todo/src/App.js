import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'Huong',
      todoItems: [
        { action: 'Buy book', done: true },
        { action: 'Get shoes', done: false },
        { action: 'Collect Tickets', done: false },
        { action: 'Call mother', done: false },
      ],
      newItemText: ''
    }
  }

  handleChange = () => {
    this.setState({
      userName: this.state.userName === 'Huong' ? 'Diem' : 'Huong'
    })
  }

  updateText = (e) => {
    this.setState({ newItemText: e.target.value })
  }

  createNewTodo = () => {
    if (!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: this.state.newItemText, done: false }
        ],
        newItemText: ''
      })
    }
  }

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
    })
  }

  renderTableRows = () => this.state.todoItems.map(item =>
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" checked={item.done} onChange={() => this.toggleTodo(item)} />
        </td>
      </tr>
    )
  

  render() {
    return (
      <div>
        <h4 className="bg-primary text-white text-center p-2">
          {this.state.userName}'s To Do List
          ({this.state.todoItems.filter(item => !item.done).length} items to do)
        </h4>

        <button className="btn btn-primary m-2" onClick={this.handleChange}>
          Change name
        </button>

        <div className="container-fluid">
          <div className="my-1">
            <input className="form-control" value={this.state.newItemText} onChange={this.updateText} />
            <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
          </div>

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTableRows()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}