import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'
import { deleteTodo } from '../actions'
import TodoInput from '../components/TodoInput'
import TodoItem from '../components/TodoItem'

class ViewTodo extends React.Component {
  render() {
    const todos = this.props.todos
    return(
      <div>
        <ul>
          {
            todos.map((todo) => {
              return <TodoItem todo={todo}
                               key={todo.id}
                               id={todo.id}
                               removeTodo={this._removeTodo.bind(this)} />
            })
          }
        </ul>
      </div>
    )
  }
  _removeTodo(id) {
    this.props.deleteTodo(id)
  }
}


const mapStateToProps = (state) => ({
  todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
  // addTodo: (text) => dispatch(addTodo(text)),
  deleteTodo: (id) => dispatch(deleteTodo(id))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewTodo)
