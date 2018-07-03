import React, { Component } from 'react'
import { StyleSheet, ScrollView, Modal, View, TouchableHighlight } from 'react-native'
import Devices from '../components/Devices'
import { Icon } from 'react-native-elements'
import { Subheader, Button } from 'react-native-material-ui';
import ClimaPicker from '../components/ClimaPicker'

class DevicesView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      devices: [],
      selectedDevice: 0,
      showModal: false,
      clima: 21
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({devices: nextProps.screenProps.devices})
  }

  onSelectDevice(deviceId, climaDevice) {
    this.setState({
      showModal: true,
      selectedDevice: deviceId,
      clima: climaDevice
    })
  }

  updateClima(clima) {
    this.setState({
      clima: clima
    })
  }

  setDevice() {
    // TODO: API method here!!
  }

  render() {
    return (
      <ScrollView>
        <Devices devices={this.state.devices} onSelectDevice={(deviceId, climaDevice) => this.onSelectDevice(deviceId, climaDevice)}/>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.showModal}
          onRequestClose={() => this.setState({showModal: false})}>
            <View style={styles.motherContainer}>
                <View>
                  <Subheader text={'Valor programado'}/>
                </View>
                <View>
                  <ClimaPicker
                    clima={this.state.clima}
                    onUpdate={(newClima) => this.updateClima(newClima)}/>
                </View>
                <View style={styles.buttonsContainer}>
                  <Button primary onPress={() => this.setDevice()} text="Configurar dispositivo"/>
                  <Button onPress={() => this.setState({showModal: false})} text="Cancelar"/>
                </View>
            </View>
        </Modal>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  motherContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonsContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
})

export default DevicesView
