import React from 'react';
import { Checkbox, Icon } from 'antd';
import '../styles/todoItem.css';

function TodoList(props) {
  const { todos } = props;
  const rows = [];

  todos.forEach((todo) => {
    if (todo.complete) {
      return;
    }
    rows.push(<TodoItem key={todo.id} title={todo.title} />);
  });

  return (
    <div>
      {rows}
    </div>
  );
}

function TodoItem(props) {
  const { title } = props;
  return (
    <div className="todoItem">
      <Checkbox />
      <div className="todoItem-title">
        {title}
      </div>
      <Icon type="star-o" />
    </div>
  );
}

export default TodoList;
