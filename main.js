import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
      return (
        <Text>Hello there!</Text>
      );
  }
}

AppRegistry.registerComponent('main', () => TodoApp);
