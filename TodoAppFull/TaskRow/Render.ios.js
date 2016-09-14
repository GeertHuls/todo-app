import React from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Swipout from react-native-swipeout;

const localStyle = StyleSheet.create({
  row: {
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  },
  container: {
    marginBottom: 20
  }
});

export default function render(baseStyle) {
  const buttons = [
    {
      text: 'Done',
      backgroundColor: '#05A5D1',
      underlayColor: '#273539',
      onPress: this.onDonePressed
    }
  ]

  return (
    <View style={localStyle.container}>
      <SwipeOut
        backgroundColor='#fff'
        right={buttons}>
        <View style={[baseStyle.container, localStyle.row]}>
          <Text style={baseStyle.label}>
            ios: {this.props.todo.task}
          </Text>
        </View>
      </SwipeOut>
    </View>
  );
}
