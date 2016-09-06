import React from 'react';

import {
  Text,
  TextInput,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {

  },
  input: {

  },
  buttonText: {

  },
  button: {

  },
  cancelButton: {

  }
});

class TaskForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      task: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
        />

        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default TaskForm;
