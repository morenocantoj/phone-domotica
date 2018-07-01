import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import { List, ListItem } from "react-native-elements"

class Devices extends Component {

  constructor(props) {
    super(props)
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
              leftIcon={{ name: 'tv'}}
              rightTitle={item.temperatura + ' ºC'}
              onPress={ () => console.log("TODO: Navigate to device details")}
            />
          )}
        />
      </List>
    )
  }
}

export default Devices
