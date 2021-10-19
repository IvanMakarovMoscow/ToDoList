import React from 'react';

class TaskInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  inputChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    const { input } = this.state;

    return (
      <div className="task-input">
        <input
          onChange={this.inputChange}
          value={input} ></input> 
          <button onClick={() => this.props.addTask(this.state.input)}>Добавить</button>
      </div>
    );
  }
}

export default TaskInput;
