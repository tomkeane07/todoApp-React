import React, {Component} from 'react';
import Todos from './todos';
import Addtodo from './Addtodo';

//state stores todo's
class App extends Component {


  state = {
    todos: [
      {id: 1, content: 'get up' },
      {id: 2, content:'brush teeth' }
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos
      //equivalent to todos: todos when they share
    })
  }


addTodo = (todo) =>{
  todo.key = todo.id = this.state.todos.length+1;
  let todos = [...this.state.todos, todo];
  this.setState({
     todos
  })

  console.log(todo);
}



  render() {
    return (
      <div className="App container">
        <h1 className="center blue-text">todoApp</h1>
        <p>click to delete</p>
        <Todos todos={ this.state.todos} deleteTodo={this.deleteTodo}  />
        <Addtodo addTodo={this.addTodo} />

      </div>
    );
  }
}

export default App;
