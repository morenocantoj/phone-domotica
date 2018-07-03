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

  render() {
    return (
      <View style={styles.container}>
        <Icon
          reverse
          name={'chevron-left'}
          color={'#757575'}
          size={22}/>
        <Text style={styles.climaText}>
          {this.props.clima}ºC
        </Text>
        <Icon
          reverse
          name={'chevron-right'}
          color={'#757575'}
          size={22}/>
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
