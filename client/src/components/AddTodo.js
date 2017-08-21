import React from 'react';
import { Form, Icon, Input } from 'antd';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.props.onSubmit(e, this.state.task);
    this.setState({
      task: '',
    });
  };
  render() {
    return (
      <Form style={{ margin: '15px' }} onSubmit={this.handleSubmit}>
        <Input
          prefix={<Icon type="user" />}
          placeholder="Add a to-do"
          value={this.state.task}
          onChange={this.handleInputChange}
        />
      </Form>
    );
  }
}

export default AddTodo;
