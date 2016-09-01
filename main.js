import React from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import TaskList from './TaskList';

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task:'Learn react native'
        }
      ]
    };
  }

  render() {
      return (
        <TaskList/>
      );
  }
}

AppRegistry.registerComponent('main', () => TodoApp);
