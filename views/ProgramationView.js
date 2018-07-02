import React, { Component } from 'react'
import { StyleSheet, View, TimePickerAndroid, DatePickerAndroid, Text } from 'react-native'
import { Constants } from 'expo';
import { Toolbar, Button } from 'react-native-material-ui';
import ClockPicker from '../components/ClockPicker'

class ProgramationView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hour: 14,
      minute: 0,
      date: '',
    }
  }

  renderProgramation() {
    // TODO: Add more clauses for kinds of devices
  }

  updateClock(hour, minutes) {
    this.setState({
      hour: hour,
      minute: minutes
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Toolbar centerElement="Nueva programación"/>
        { this.renderProgramation() }
        <ClockPicker
          hour={this.state.hour}
          minute={this.state.minute}
          onUpdate={(hour, minute) => this.updateClock(hour, minute)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white'
  },
});

export default ProgramationView
