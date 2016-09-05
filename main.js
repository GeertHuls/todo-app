import React from 'react';
import {
  AppRegistry,
  Navigator,
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
        },
        {
            task: 'Learn Redux'
        }
      ]
    };
  }

  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <Text>Add form comes here.</Text>
        );
      default:
        return (
          <TaskList
            onAddStarted={() =>
              nav.push({
                name:'taskform'
            })}
            todos={route.passProps.todos}
            />
        );
    }
  }

  render() {
      return (
        <Navigator
          initialRoute={{
              name: 'tasklist',
              index: 0,
              passProps: {
                todos: this.state.todos}
            }
          }
          renderScene={this.renderScene} />
      );
  }
}

AppRegistry.registerComponent('main', () => TodoApp);
