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
    store.subscribe(() => {
      this.setState(store.getState());
    });
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
    store.dispatch({
      type: 'ADD_TODO',
      task
    });
    this.nav.pop();
  }

  onDone(todo) {
    store.dispatch({
      type: 'DONE_TODO',
      todo
    });
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
            filter={this.state.filter}
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
