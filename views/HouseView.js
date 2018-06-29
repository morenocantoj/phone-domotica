import React, { Component } from 'react';
import { View, Dimensions, BackHandler } from 'react-native';
import { Constants } from 'expo';
import { Toolbar, Button } from 'react-native-material-ui';

class HouseView extends Component {

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.props.goBack());
  }

  render() {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <Toolbar
          centerElement="Detalle casa"/>
      </View>
    )
  }
}

export default HouseView
