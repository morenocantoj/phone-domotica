import React, { Component } from 'react'
import { View, FlatList, Text } from 'react-native'
import { List, ListItem } from "react-native-elements"

class Controllers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      controllers: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({controllers: nextProps.controllers})
  }

  render() {
    return (
      <List containerStyle={{marginTop: 0}}>
        <FlatList
          data={this.state.controllers}
          keyExtractor={(item)=> item.id}
          renderItem={({item}) => (
            <ListItem
              title={item.nombre}
            />
          )}
        />
      </List>
    )
  }
}

export default Controllers
