import React, {Component} from 'react';

export default class TodoCreator extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newItemText: ''
         }
    }

    updateText = (e) => {
      this.setState({ newItemText: e.target.value })
    }
  
    createNewTodo = () => {
      this.props.callback(this.state.newItemText);
      this.setState({ newItemText: '' })
    }

    render = () => 
      <div className="my-1">
        <input className="form-control" value={this.state.newItemText} onChange={this.updateText} />
        <button className="btn btn-primary mt-1" onClick={this.createNewTodo}>Add</button>
      </div>
    
}