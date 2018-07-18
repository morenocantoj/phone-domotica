import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { List, ListItem } from "react-native-elements"

class Devices extends Component {

  constructor(props) {
    super(props)
  }

  goToClimatization(deviceId, climaDevice) {
    this.props.onSelectDevice(deviceId, climaDevice)
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
                  onPress={ () => console.log("Activate light!!")}
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
