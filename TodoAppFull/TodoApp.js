import React from 'react';
import {
  Navigator
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';
import store from './todoStore';

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.referenceNav = this.referenceNav.bind(this);
    this.onAddStartedNav = this.onAddStartedNav.bind(this);
    this.renderScene = this.renderScene.bind(this);

    this.onCancel = this.onCancel.bind(this);
    this.onAdd = this.onAdd.bind(this);

    this.onDone = this.onDone.bind(this);

    this.state = store.getState();
  }

  onAddStartedNav() {
    this.nav.push({
      name:'taskform'
    });
  }

  onCancel() {
    //Hide the current view
    //and revert to the previous view.
    this.nav.pop();
  }

  onAdd(task) {
    this.state.todos.push({ task });

    this.setState({
      todos: this.state.todos
    });
    this.nav.pop();
  }

  onDone(todo) {
    const filteredTodos =
      this.state.todos.filter((filterTodo) => {
        return filterTodo !== todo;
      });

      this.setState({ todos: filteredTodos})
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm
            onAdd={this.onAdd}
            onCancel={this.onCancel}
            />
        );
      default:
        return (
          <TaskList
            onAddStartedNav={this.onAddStartedNav}
            onDone={this.onDone}
            todos={this.state.todos}
            />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  referenceNav(nav) {
    this.nav = nav;
  }

  render() {
      return (
        <Navigator
          configureScene={this.configureScene}
          ref={this.referenceNav}
          initialRoute={{
              name: 'tasklist',
              index: 0
          }}
          renderScene={this.renderScene} />
      );
  }
}

export default TodoApp;
