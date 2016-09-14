import React from 'react';

import {
  Text,
  View
} from 'react-native';

import Swipout from react-native-swipeout;

export default function render(styles) {

  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePressed
    }
  ]

  return (
    <SwipeOut
      backgroundColor='#fff'
      right={buttons}>
      <View style={styles.container}>
        <Text style={styles.label}>
          ios: {this.props.todo.task}
        </Text>
      </View>
    </SwipeOut>
  );
}
