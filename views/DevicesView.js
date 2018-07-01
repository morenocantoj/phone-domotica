import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Devices from '../components/Devices'

class DevicesView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      devices: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({devices: nextProps.screenProps.devices})
  }

  render() {
    return (
      <ScrollView>
        <Devices devices={this.state.devices}/>
      </ScrollView>
    )
  }
}

export default DevicesView
