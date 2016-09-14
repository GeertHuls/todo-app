import React from 'react';

import {
  View,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Text
} from 'react-native';

import TaskRow from './TaskRow/Component';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'flex-start'
  },
  button: {
    height: 60,
    borderColor: '#05A5D1',
    borderWidth: 2,
    backgroundColor: '#333',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FAFAFA',
    fontSize: 20,
    fontWeight: '600'
  }
});

class TaskList extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.renderRow = this.renderRow.bind(this);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };
  }

  //Happens right after the set state command in the onAdd function
  //in the main component. Recalculate the dataSource
  //with the latest data.
  componentWillReceiveProps(nextProps) {
    const dataSource = this
      .state
      .dataSource
      .cloneWithRows(nextProps.todos);

      this.setState({ dataSource });
  }

  renderRow(todo) {
    return (
      <TaskRow
        onDone={this.props.onDone}
        todo={todo} />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />

        <TouchableHighlight
          onPress={this.props.onAddStartedNav}
          style={styles.button}>
            <Text style={styles.buttonText}>
              Add one
            </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

TaskList.propTypes = {
  onAddStartedNav: React.PropTypes.func.isRequired,
  onDone: React.PropTypes.func.isRequired,
  todos: React.PropTypes
    .arrayOf(React.PropTypes.object).isRequired
};

export default TaskList;
