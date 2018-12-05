import React from 'react'

import './TodoInput.css'

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "New Task"
    }
  }
  render() {
    return (
      <div>
        <input type="text"
               value={this.state.value}
               onChange={this._handleChange.bind(this)} />
        <button className="btn btn-primary"
                onClick={() => this._addTodo(this.state.value)}>
          Submit
        </button>
      </div>
    )
  }
  _handleChange(e) {
    this.setState({value: e.target.value})
  }
  _addTodo(todo) {
    if(todo.length > 0) {
      this.props.addTodo(todo)
      this.setState({value: ""})
    }
  }
}
