import React from 'react';
import css from "./Todo.module.css"

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
    }
  }
  render() {
    return (
      <div className={css.wrapper} >
        <label className={css.todoCheck} >
          <input type="checkbox" checked={this.props.status} onChange={() => alert("change")} />
          <p className={this.props.status ? css.done : ""} >{this.props.text}</p>
        </label>

        <div className={css.buttons}>
          <button 
            type="button" 
            className="btn btn-success" 
            onClick={() => this.props.onEdit(this.props.text)}
          >
            Edit
          </button>
          <button 
            type="button" 
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            Del
          </button>
        </div>
      </div>
    )
  }
}

export default Todo;