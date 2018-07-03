import React, { Component } from 'react'
import { StyleSheet, View, Text, TimePickerAndroid, Platform } from 'react-native'

class ClockPicker extends Component {
  constructor(props) {
    super(props)
  }

  async setClock() {
    if (Platform.OS === 'android') {
      try {
        const {action, hour, minute} = await TimePickerAndroid.open({
          hour: this.props.hour,
          minute: this.props.minute,
          is24Hour: false, // Will display '2 PM'
        });
        if (action === TimePickerAndroid.timeSetAction) {
          this.props.onUpdate(hour, minute)
        }
      } catch ({code, message}) {
        console.warn('Cannot open time picker', message);
      }
    } else if (Platform.OS === 'ios') {
      console.log("Not implemented!!")
    } else {
      console.log("Windows Phone is not supported!")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.hour}
          onPress={() => this.setClock()}>
          {this.props.hour}:{this.props.minute}{this.props.minute == 0 ? '0' : ''}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 12
  },
  hour: {
    fontSize: 64,
    color: '#212121',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default ClockPicker
