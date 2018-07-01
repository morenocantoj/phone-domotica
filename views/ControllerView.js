import React, { Component } from 'react';
import { Constants } from 'expo';
import { StyleSheet, View, ScrollView, Dimensions, BackHandler } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

class ControllerView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      controller: {}
    }
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Toolbar centerElement="Vista de Controlador"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: Constants.statusBarHeight
  }
});

export default ControllerView
