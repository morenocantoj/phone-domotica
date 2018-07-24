import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { List, ListItem } from "react-native-elements"
import { editDeviceLight } from '../API/methods'

class Devices extends Component {

  constructor(props) {
    super(props)
  }

  goToClimatization(deviceId, climaDevice) {
    this.props.onSelectDevice(deviceId, climaDevice)
  }
  
  turnLight(device) {
    // Change status port value to opposite
    status = device.status ? false : true
    
    // Call to API method
    editDeviceLight({
      deviceId: device.dispositivo_id,
      status: status,
      houseId: this.props.houseId,
      controllerId: this.props.controllerId,
      token: this.props.token
    }).then((response) => {
      // Reload devices
      this.props.onChangeDevice()
      
    }).catch((error) => {
      console.log("Error activating light! " + error)
    })
  }

  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        <FlatList
          data={this.props.devices}
          keyExtractor={(item)=> item.dispositivo_id}
          renderItem={({item}) => {
            if (item.tipo == "clima") {
              return (
                <ListItem
                  title={item.nombre}
                  subtitle={'Climatización'}
                  leftIcon={{ name: 'cloud'}}
                  rightIcon={{ name: 'settings' }}
                  rightTitle={item.temperatura + ' ºC'}
                  onPress={ () => this.goToClimatization(item.dispositivo_id, item.temperatura)}
                />
              )
            } else if (item.tipo == "light") {
              return (
                <ListItem
                  title={item.nombre}
                  subtitle={'Luz'}
                  leftIcon={{ name: 'highlight'}}
                  rightIcon={{ name: 'power-settings-new' }}
                  rightTitle={item.status ? 'ON' : 'OFF'}
                  rightTitleStyle={ item.status ? {color: '#8BC34A'} : null }
                  onPress={ () => this.turnLight(item) }
                />
              )
            }
          }}
        />
      </List>
    )
  }
}

export default Devices
