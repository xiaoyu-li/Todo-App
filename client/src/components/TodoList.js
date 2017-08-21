import React from 'react';
import { Checkbox, Icon } from 'antd';
import '../styles/todoItem.css';

function getVisibleTodos(todos, visible) {
  switch (visible) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETE':
      console.log(123);
      return todos.filter(t => t.complete);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.complete);
    default:
      return todos;
  }
}

function TodoList(props) {
  const { todos, visible, handleCheck } = props;
  const rows = [];
  const visibleTodos = getVisibleTodos(todos, visible);
  console.log(visibleTodos);
  visibleTodos.forEach((todo, index) => {
    rows.push(<TodoItem key={todo.id} todo={todo} onCheck={() => handleCheck(todo.id)} />);
  });

  return (
    <div>
      {rows}
    </div>
  );
}

function TodoItem(props) {
  const { todo, onCheck } = props;
  const todoClass = todo.complete ? 'todoItem-title todoItem-completed' : 'todoItem-title';
  const starClass = todo.complete ? 'todoItem-star todoItem-star-active' : 'todoItem-star';
  return (
    <div className="todoItem">
      <Checkbox checked={todo.complete} onChange={onCheck} />
      <div className={todoClass}>
        {todo.title}
      </div>
      <Icon type="star-o" onClick={onCheck} className={starClass} />
    </div>
  );
}

export default TodoList;
