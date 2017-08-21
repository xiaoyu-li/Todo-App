import React, { Component } from 'react';
import { Button } from 'antd';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const data = [
  { id: '0', title: 'title1', complete: false },
  { id: '1', title: 'title2', complete: false },
  { id: '2', title: 'title3', complete: false },
  { id: '3', title: 'title4', complete: false },
];
const visible = ['SHOW_ALL', 'SHOW_COMPLETE', 'SHOW_ACTIVE'];

export default class Todo extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    todos: [],
    visible: 'SHOW_ALL',
  };

  componentDidMount() {
    this.setState({ todos: data });
  }

  handleCheck = (id) => {
    const updatedTodos = this.state.todos.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    this.setState({
      todos: updatedTodos,
    });
  };

  handleSubmit = (e, task) => {
    e.preventDefault();
    const newTodo = {
      id: this.state.todos.length.toString(),
      title: task,
      complete: false,
    };

    this.setState(prev => ({
      todos: prev.todos.concat(newTodo),
    }));
  };

  handleShowAll = () => {
    this.setState({
      visible: 'SHOW_ALL',
    });
  };

  handleShowActive = () => {
    this.setState({
      visible: 'SHOW_ACTIVE',
    });
  };

  handleShowComplete = () => {
    this.setState({
      visible: 'SHOW_COMPLETE',
    });
  };
  render() {
    return (
      <div>
        <AddTodo onSubmit={this.handleSubmit} />
        <TodoList
          todos={this.state.todos}
          visible={this.state.visible}
          handleCheck={this.handleCheck}
        />
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button onClick={this.handleShowAll}>SHOW ALL</Button>
          <Button onClick={this.handleShowActive}>SHOW ACTIVE</Button>
          <Button onClick={this.handleShowComplete}>SHOW COMPLETE</Button>
        </div>
      </div>
    );
  }
}
