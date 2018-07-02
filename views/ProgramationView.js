import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TimePickerAndroid, DatePickerAndroid, Text } from 'react-native'
import { Constants } from 'expo';
import { Toolbar, Button, Subheader } from 'react-native-material-ui';
import ClockPicker from '../components/ClockPicker'
import { CheckBox } from 'react-native-elements'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class ProgramationView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hour: 14,
      minute: 0,
      date: '',

      firstElement: 0,
      elementSelected: 0,
      deviceSelected: 0,
    }
  }

  selectOption(device, i) {
    this.setState({
      elementSelected: i,
      deviceSelected: device.dispositivo_id
    })
  }

  renderProgramation() {
    var radio_props = []

    this.props.devices.map((device) => {
      radio_props.push({label: device.nombre, value: device.dispositivo_id})
    })

    return (
      <RadioForm>
        { this.props.devices.map((device, i) => {
          return (
            <RadioButton
              labelHorizontal={true}
              key={i}>
              <RadioButtonInput
                obj={device}
                index={i}
                isSelected={this.state.elementSelected === i}
                onPress={ (value, index) => this.selectOption(device, index) }
                buttonWrapStyle={{ marginRight: 15 }}
                buttonInnerColor={ this.state.elementSelected === i ? '#FFC107' : '#2196F3' }
                buttonOuterColor={ this.state.elementSelected === i ? '#FFC107' : '#2196F3' }
                buttonSize={12}
                borderWidth={1}
              />
              <Text
                onPress={ () => this.selectOption(device, i) }
                textAlign={'left'}
                style={styles.radioText}
                >
                { device.nombre }
              </Text>
            </RadioButton>
          )
        })}
      </RadioForm>
    )
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
        <ClockPicker
          hour={this.state.hour}
          minute={this.state.minute}
          onUpdate={(hour, minute) => this.updateClock(hour, minute)}/>
        <Subheader text={'Dispositivos disponibles (climatización)'}/>
        <ScrollView contentContainerStyle={styles.devices}>
          { this.renderProgramation() }
        </ScrollView>
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
  devices: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    ...StyleSheet.absoluteFillObject
  },
  radioText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
});

export default ProgramationView
