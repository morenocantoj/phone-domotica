import React, { Component } from 'react';
import { View } from 'react-native';
import { Toolbar, Button } from 'react-native-material-ui';
import { Constants } from 'expo';

class HomeView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user : this.props.user
    }
  }

  render() {
    if(this.props.user === undefined) {
      console.log("Redirect to login!")
    }
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <Toolbar centerElement="Joc i partida xavals"/>
        <Button text="¿Has olvidado tu contraseña?"/> 
      </View>
    )
  }
}

export default HomeView;
