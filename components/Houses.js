import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { CardViewWithIcon } from "react-native-simple-card-view";
import { View } from 'react-native';
import { Button } from 'react-native-material-ui';

export default class Houses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: {}
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({houses: nextProps.houses})
  }

  goHouse(houseId) {
    this.props.houseScreen(houseId)
  }

  renderHouses() {
    if (this.state.houses.casas) {
      return this.state.houses.casas.map( (house) => {
        return <CardViewWithIcon
                  key={house.id}
                  androidIcon={'md-home'}
                  iosIcon={'ios-home'}
                  title={house.nombre}
                  iconBgColor={'#FFC107'}
                  onPress={() => this.goHouse(house.id) }
                 />
      })
    }
  }

  render() {
    return (
      <View>
        { this.renderHouses() }
      </View>
    )
  }
}
