import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'

class ClimaPicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minClima: 13,
      maxClima: 31,
    }
  }

  decreaseClima() {
    // Only decrease if we dont reached limit
    if (this.props.clima > this.state.minClima) {
      this.props.onUpdate(this.props.clima - 1)
    }
  }

  increaseClima() {
    // Only increases if we dont reached limit
    if (this.props.clima < this.state.maxClima) {
      this.props.onUpdate(this.props.clima + 1)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon
          name={'chevron-left'}
          color={'#757575'}
          size={36}
          onPress={() => this.decreaseClima()}/>
        <Text style={styles.climaText}>
          {this.props.clima}ºC
        </Text>
        <Icon
          name={'chevron-right'}
          color={'#757575'}
          size={36}
          onPress={() => this.increaseClima()}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  climaText: {
    fontSize: 28,
    color: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
})

export default ClimaPicker
