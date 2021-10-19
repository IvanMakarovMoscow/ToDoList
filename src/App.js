import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [
        { id: 0, title: 'Выполнить проект', done: false },
        { id: 1, title: 'Сделать приложение ToDoList', done: true },
        { id: 2, title: 'Cдать экзамен', done: false }
      ]
    };
  }

  addTask = task => {
    console.log(this.state.tasks.length);

    let newTask = {
      id: this.state.tasks.length !== 0 ? this.state.tasks.length : 0,
      title: task,
      done: false
    }
    this.setState({tasks:[...this.state.tasks, newTask]});
  };
  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };
  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);


    return (
      <div className="App">
        <h1 className="top"> Активные задачи: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}>
          </Task>
        ))}
        <TaskInput addTask={this.addTask} />
      </div>
    );
  }
}

export default App;
