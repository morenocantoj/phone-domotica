import React, { Component } from 'react';
import { Constants } from 'expo';
import { StyleSheet, View, ScrollView, Dimensions, BackHandler } from 'react-native';
import { Toolbar, ActionButton } from 'react-native-material-ui';
import { Alert } from 'react-native'
import { getController } from '../API/methods'
import { ControllerNavigator } from '../Navigator'

class ControllerView extends Component {

  constructor(props) {
    super(props)

    this.state = {
      controller: {
        nombre: '',
        dispositivos: []
      }
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', () => this.props.goBack());
  }

  componentWillMount() {
    getController(this.props.houseId, this.props.controllerId).then((controller) => {
      this.setState({controller: controller});
    })
    .catch((error) => {
      Alert.alert("Error", "¡Imposible acceder a tus datos de la zona actual!")
    })
  }

  dispatchProgramationAction(action) {
    switch (action) {
      case 'cloud':
        this.goToClimaProgramation(this.state.controller.dispositivos)
        break;
      case 'highlight':
        // Go to light programation
        this.goToLightProgramation(this.state.controller.dispositivos)
        break
      default:
        break
    }
  }

  goToClimaProgramation(devices) {
    this.props.goProgramation("clima", devices, this.props.controllerId, this.props.houseId)
  }

  goToLightProgramation(devices) {
    this.props.goProgramation("light", devices, this.props.controllerId, this.props.houseId)
  }

  render() {
    return (
      <View style={styles.viewContainer}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={ () => this.props.goBack() }
          centerElement={this.state.controller.nombre}
          style={{ container: styles.toolbarContainer }}/>
        <ControllerNavigator screenProps={{
          devices: this.state.controller.dispositivos,
          houseId: this.props.houseId,
          controllerId: this.props.controllerId,
          token: this.props.user.token}}/>
        <ActionButton
          style={{ container: styles.actionButton }}
          icon={'access-alarm'}
          actions={[
            { icon: 'highlight', label: 'Luces'},
            { icon: 'cloud', label: 'Climatización'},
          ]}
          transition="speedDial"
          onPress={(action) => this.dispatchProgramationAction(action) }
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: Constants.statusBarHeight
  },
  toolbarContainer: {
    borderBottomWidth: 0,
    elevation: 0,
    shadowOpacity: 0
  },
  actionButton: {
    backgroundColor: '#FFC107',
  }
});

export default ControllerView
