import React from 'react';
import {
  AppRegistry
} from 'react-native';
import TaskList from './TaskList';

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

  onAddStarted() {
    console.log('on add started');
  }

  render() {
      return (
        <TaskList
          onAddStarted={this.onAddStarted}
          todos={this.state.todos}
          />
      );
  }
}

AppRegistry.registerComponent('main', () => TodoApp);
