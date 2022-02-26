import './App.css';
import { Component } from 'react';
import Header from "./components/header/Header.jsx";
import CreateTodo from './components/create-todo/CreateTodo.jsx';
import TodoLists from './components/todo-lists/TodoLists.jsx';

// function App() {
//   return (
//     <div className="App">
//       Todo
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          title: "Buy suger",
          status: true,
        },
        {
          id: 2,
          title: "Buy salt 1kg"
        },
        {
          id: 3,
          title: "Buy apple",
          status: true,
        }
      ],
    }
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleCreateTodo(str) {
    this.setState({ todos: [ ...this.state.todos, {id: Math.random(), title: str} ] })
  }
  onDelete(id) { // 1
    const newTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({todos: newTodos})
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Header count={this.state.todos.length} />
        <main className='main'>
          <CreateTodo onCreate={this.handleCreateTodo} />
          <TodoLists 
            todos={this.state.todos}
            onDelete={this.onDelete}
          />
        </main>
      </div>
    )
  }
}

export default App;
