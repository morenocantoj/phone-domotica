import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TimePickerAndroid, DatePickerAndroid, Text } from 'react-native'
import { Constants } from 'expo';
import { Toolbar, Button, Subheader, ActionButton } from 'react-native-material-ui';
import ClockPicker from '../components/ClockPicker'
import RadioForm, { RadioButton, RadioButtonInput } from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import ClimaPicker from '../components/ClimaPicker'
import { editDevice, programDevice } from '../API/methods'
import Toast, { DURATION } from 'react-native-easy-toast'

class ProgramationView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hour: 14,
      minute: 0,
      date: moment(new Date()).format('YYYY-MM-DD'),

      firstElement: 0,
      elementSelected: 0,
      deviceSelected: props.devices[0].dispositivo_id,

      clima: 21
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

  updateClima(clima) {
    this.setState({
      clima: clima
    })
  }

  setDate(date) {
    this.setState({
      date: date
    })
  }

  doProgramation() {
    // Render good minutes
    var minute = '00'
    if (this.state.minute > 0 && this.state.minute < 10) {
      minute = '0'+this.state.minute
    } else if (this.state.minute > 10) {
      minute = this.state.minute
    }

    var fecha = this.state.date+' '+this.state.hour+':'+minute

    programDevice({token: this.props.user.token,
      houseId: this.props.houseId,
      controllerId: this.props.controllerId,
      deviceId: this.state.deviceSelected,
      fecha: fecha,
      clima: this.state.clima}).then((response) => {
        this.refs.toast.show('Dispositivo programado correctamente', 1000, () => {
          this.props.goBack()
        });

      }).catch((error) => {
        this.refs.toast.show('¡Error al programar dispositivo!', 1500)
      })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Toolbar centerElement="Nueva programación"/>
        <ScrollView>
          <ClockPicker
            hour={this.state.hour}
            minute={this.state.minute}
            onUpdate={(hour, minute) => this.updateClock(hour, minute)}/>
          <DatePicker
            mode={'date'}
            date={this.state.date}
            placeholder={'Selecciona una fecha'}
            format={'DD-MM-YYYY'}
            minDate={new Date()}
            confirmBtnText={'Confirmar'}
            cancelBtnText={'Cancelar'}
            onDateChange={(date) => this.setDate(date)}
            style={styles.datePicker}
            showIcon={false}
            customStyles={{
              dateInput: {
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
              },
              dateText: {
                fontSize: 24
              }
            }}
            />
          <Subheader text={'Valor programado'}/>
          <ClimaPicker
            clima={this.state.clima}
            onUpdate={(newClima) => this.updateClima(newClima)}/>
          <Subheader text={'Dispositivos disponibles (climatización)'}/>
          <View style={styles.devices}>
            { this.renderProgramation() }
          </View>
        </ScrollView>
        <ActionButton
          icon={'check'}
          onPress={() => this.doProgramation()}
          style={{ container: styles.actionButton }}/>
        <Toast
          ref={'toast'}
          style={styles.toastContainer}
          position='bottom'
          positionValue={50}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 24,
    backgroundColor: 'white',
    flex: 1,
  },
  devices: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 20,
    flex: 2,
  },
  radioText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  datePicker: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  actionButton: {
    backgroundColor: '#FFC107',
  },
  toastContainer: {
    backgroundColor:'#212121',
  }
});

export default ProgramationView
