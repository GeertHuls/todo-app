import React from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: [
        {
          task:'Learn react native'
        },
        {
            task: 'Learn Redux'
        }
      ]
    };
  }

  onAddStartedNav(nav) {
    nav.push({
      name:'taskform'
    });
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <TaskForm />
        );
      default:
        return (
          <TaskList
            onAddStartedNav={route.passProps.onAddStartedNav}
            todos={route.passProps.todos}
            nav={nav}
            />
        );
    }
  }

  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }

  render() {
      return (
        <Navigator
          configureScene={this.configureScene}
          initialRoute={{
              name: 'tasklist',
              index: 0,
              passProps: {
                onAddStartedNav: this.onAddStartedNav,
                todos: this.state.todos}
            }
          }
          renderScene={this.renderScene} />
      );
  }
}

AppRegistry.registerComponent('main', () => TodoApp);
