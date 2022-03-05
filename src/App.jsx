import './App.css';
import { Component } from 'react';
import Header from "./components/header/Header.jsx";
import CreateTodo from './components/create-todo/CreateTodo.jsx';
import TodoLists from './components/todo-lists/TodoLists.jsx';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      isLoading: true
    }
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onEdit = this.onEdit.bind(this)
  }
  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({todos: localData})
    setTimeout(() => {
      this.setState({isLoading: false})
    },2500)
  }
  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
  }

  handleCreateTodo(str) {
    this.setState({ todos: [ ...this.state.todos, {id: Math.random(), title: str} ] })
  }
  onDelete(id) { // 1
    const newTodos = this.state.todos.filter((item) => item.id !== id);
    this.setState({todos: newTodos})
  }
  
  onCheck(id){
    const newStatus = this.state.todos.map( (todo) =>{
      if(todo.id === id){
        return {...todo, status: !todo.status}
      }
        return todo;
    });
    this.setState({todos: newStatus})
  }

  onEdit(id,newText) {
    const newArr = this.state.todos.map((todo) =>{
      if(todo.id === id){
        return {...todo, title: newText}
      }
        return todo;
    });
    this.setState({todos: newArr})
  }

  render() {

    if(this.state.isLoading){
      return(
        <div className='text-center mt-5'>
          <img width={'400px'} src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" alt="Loading gif" />
        </div>
      )
    }
    return (
      <div className="App">
        <Header count={this.state.todos.length} done={this.state.todos.filter((todo) => todo.status).length}/>
        <main className='main'>
          <CreateTodo onCreate={this.handleCreateTodo} />
          <TodoLists 
            todos={this.state.todos}
            onDelete={this.onDelete}
            onCheck={this.onCheck}
            onEdit={this.onEdit}
          />
        </main>
      </div>
    )
  }
}

export default App;
