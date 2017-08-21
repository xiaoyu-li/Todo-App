import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const data = [
  { title: 'title1', id: '1', complete: false },
  { title: 'title2', id: '2', complete: false },
  { title: 'title3', id: '3', complete: false },
  { title: 'title4', id: '4', complete: false },
];

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    this.setState({
      todos: data,
    });
  }
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default Todo;
