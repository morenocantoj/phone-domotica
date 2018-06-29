import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Dimensions, BackHandler } from 'react-native';
import { Constants } from 'expo';
import { Toolbar, Button } from 'react-native-material-ui';
import { getHouse } from '../API/methods'
import Controllers from '../components/Controllers'
import { Alert } from 'react-native'

class HouseView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      house: {}
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.props.goBack());
  }

  componentWillMount() {
    getHouse(this.props.houseId).then((house) => {
      this.setState({house: house});
    })
    .catch((error) => {
      Alert.alert("Error", "¡Imposible acceder a tus datos de la casa!")
    })
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Toolbar
          centerElement={this.state.house.inmueble_nombre}/>
        <ScrollView>
          <Controllers controllers={this.state.house.controladores} {...this.props}/>
        </ScrollView>
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

export default HouseView
