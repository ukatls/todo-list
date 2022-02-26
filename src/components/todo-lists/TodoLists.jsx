import React from 'react';
import Todo from '../todo/Todo.jsx';


class TodoLists extends React.Component {

  onEdit(text) {
    alert(text)
  }

  render() {

    const arr = this.props.todos.map( (todo) => {
      return <Todo 
        id={todo.id}
        text={todo.title}
        status={todo.status}
        onEdit={this.onEdit}
        onDelete={this.props.onDelete}
      />
    })
    // [ 
    //   <Todo text="Buy suger" />,
    //   <Todo text="Buy salt 1kg" />,
    // ]

    return (
      <div className='todo_wrapper'>
        {arr}
      </div>
    )
  }
}

export default TodoLists;