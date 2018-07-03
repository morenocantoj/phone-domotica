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
          renderItem={({item}) => (
            <ListItem
              title={item.nombre}
              subtitle={'Aire acondicionado'}
              leftIcon={{ name: 'cloud'}}
              rightTitle={item.temperatura + ' ºC'}
              onPress={ () => this.goToClimatization(item.dispositivo_id, item.temperatura)}
            />
          )}
        />
      </List>
    )
  }
}

export default Devices
