import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-material-ui'


class LightPicker extends Component {

  constructor(props) {
    super(props)

    this.state = {
      engage: true
    }
  }

  setEngage(value) {
    this.setState({
      engage: value,
    })
    this.props.onUpdate(value)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          text='Encender'
          raised={this.state.engage}
          icon='highlight'
          primary={true}
          onPress={() => this.setEngage(true)}
          style={buttonContainer}
          />
        <Button
          text='Apagar'
          raised={!this.state.engage}
          icon='highlight-off'
          onPress={() => this.setEngage(false)}
          accent={true}
          style={buttonContainer}
          />
      </View>
    )
  }
}

const buttonContainer = {
  container: {
    width: 130
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default LightPicker;
