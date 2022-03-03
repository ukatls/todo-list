import React from 'react';
import Todo from '../todo/Todo.jsx';


class TodoLists extends React.Component {

  render() {

    const arr = this.props.todos.map( (todo) => {
      return <Todo 
        id={todo.id}
        text={todo.title}
        status={todo.status}
        onDelete={this.props.onDelete}
        onCheck={this.props.onCheck}
        onEdit={this.props.onEdit}
      />
    })

    return (
      <div className='todo_wrapper'>
        {arr.length ? arr : <h3 className='text-center mt-2 mb-2'>Please add Todo</h3>}
      </div>
    )
  }
}

export default TodoLists;