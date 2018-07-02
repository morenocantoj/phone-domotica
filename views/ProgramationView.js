import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { Constants } from 'expo';
import { Toolbar } from 'react-native-material-ui';

class ProgramationView extends Component {
  constructor(props) {
    super(props)
  }

  renderProgramation() {
    console.log(this.props.devices)
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Toolbar centerElement="Nueva programación"/>
        { this.renderProgramation() }
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

export default ProgramationView
