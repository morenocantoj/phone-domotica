import React, { Component } from 'react'
import { StyleSheet, ScrollView, Modal, View, TouchableHighlight } from 'react-native'
import Devices from '../components/Devices'
import { Icon } from 'react-native-elements'
import { Subheader, Button } from 'react-native-material-ui';
import ClimaPicker from '../components/ClimaPicker'
import { editDevice, getController } from '../API/methods'
import Toast, { DURATION } from 'react-native-easy-toast'

// Very important TODO: Connect Tabbar with Redux
class DevicesView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      devices: [],
      selectedDevice: 0,
      showModal: false,
      clima: 21,
      houseId: '',
      controllerId: '',
      userToken: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      devices: nextProps.screenProps.devices,
      houseId: nextProps.screenProps.houseId,
      controllerId: nextProps.screenProps.controllerId,
      userToken: nextProps.screenProps.token
    })
  }

  onSelectDevice(deviceId, climaDevice) {
    this.setState({
      showModal: true,
      selectedDevice: deviceId,
      clima: climaDevice,
    })
  }

  updateClima(clima) {
    this.setState({
      clima: clima
    })
  }

  setDevice() {
    editDevice({token: this.state.userToken, houseId: this.state.houseId,
      controllerId: this.state.controllerId, deviceId: this.state.selectedDevice,
      temperatura: {temperatura: this.state.clima}})
      .then((response) => {
        this.getDevices()
        this.setState({showModal: false})
      })
  }

  getDevices() {
    getController(this.state.houseId, this.state.controllerId)
    .then((controller) => {
      this.setState({devices: controller.dispositivos});
    })
    .catch((error) => {
      console.log("Error retrieving data from server");
    });
  }

  render() {
    return (
      <ScrollView>
        <Devices 
          devices={this.state.devices} 
          houseId={this.state.houseId}
          controllerId={this.state.controllerId}
          token={this.state.userToken}
          onSelectDevice={(deviceId, climaDevice) => this.onSelectDevice(deviceId, climaDevice)}
          onChangeDevice={() => this.getDevices() }/>
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
                <Toast
                  ref={'toast'}
                  style={styles.toastContainer}
                  position='bottom'
                  positionValue={150}/>
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
  toastContainer: {
    backgroundColor:'#212121',
  },
})

export default DevicesView
