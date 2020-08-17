import React, { Component } from 'react';
import TodoBanner from './TodoBanner'
import TodoRow from './TodoRow'
import TodoCreator from './TodoCreator'
import { VisibilityControl } from './VisibilityControl'

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
      showCompleted: true
    }
  }

  componentDidMount = () => {
    let data = localStorage.getItem("todos");
    this.setState(data != null
      ? JSON.parse(data)
      : {
        userName: 'Huong',
        todoItems: [
          { action: 'Buy book', done: true },
          // { action: 'Get shoes', done: false },
          { action: 'Collect Tickets', done: false },
          { action: 'Call mother', done: false },
        ],
        showCompleted: true
      })
  }

  handleChange = () => {
    this.setState({
      userName: this.state.userName === 'Huong' ? 'Diem' : 'Huong'
    })
  }

  updateText = (e) => {
    this.setState({ newItemText: e.target.value })
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task)) {
      this.setState({
        todoItems: [
          ...this.state.todoItems,
          { action: task, done: false }
        ]
      }, () => localStorage.setItem("todos", JSON.stringify(this.state))
      )
    }
  }

  toggleTodo = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
    }, () => localStorage.setItem("todos", JSON.stringify(this.state))
    )
  }

  renderTableRows = (doneValue) => this.state.todoItems
    .filter(item => item.done === doneValue)
    .map(item =>
      <TodoRow
        key={item.action}
        item={item}
        callback={this.toggleTodo}
      />
    )

  renderTable = () => this.state.todoItems.map(item =>
    <TodoRow
      key={item.action}
      item={item}
      callback={this.toggleTodo}
    />
  )
  render() {
    return (
      <div>
        <TodoBanner
          userName={this.state.userName}
          todoItems={this.state.todoItems}
        />

        <button className="btn btn-primary m-2" onClick={this.handleChange}>
          Change name
        </button>

        <div className="container-fluid">
          <TodoCreator callback={this.createNewTodo} />

          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </table>

          <div className="bg-secondary text-white text-center p-2">
            <VisibilityControl
              description="Completed Tasks"
              isChecked={this.state.showCompleted}
              callback={(checked) => this.setState({ showCompleted: checked })}
            />
          </div>

          {this.state.showCompleted &&
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableRows(true)}
              </tbody>
            </table>
          }
        </div>
      </div>
    )
  }
}