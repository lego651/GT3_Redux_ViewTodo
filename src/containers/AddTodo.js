import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import TodoInput from '../components/TodoInput'

class AddTodo extends React.Component {
  render() {
    return(
      <div>
        <TodoInput todoText=""
                   addTodo={this._addTodo.bind(this)} />
      </div>
    )
  }
  _addTodo(text){
    this.props.addTodo(text)
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text))
})
export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
