import React from 'react';
import { Form, Icon, Input } from 'antd';

function AddTodo() {
  return (
    <Form style={{ margin: '15px' }}>
      <Input prefix={<Icon type="user" />} placeholder="Add a to-do" />
    </Form>
  );
}

export default AddTodo;
