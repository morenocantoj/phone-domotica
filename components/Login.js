import React, { Component } from 'react';
import { COLOR, ThemeProvider, Toolbar, Button } from 'react-native-material-ui';
import { StyleSheet, Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: ''
    }
  }
  
  onLoginPress() {
    console.log(this.state.login + " " + this.state.password)
    this.props.login(this.state.login, this.state.password);
  }

  render() {
    return (
      <View style={{ paddingTop: Constants.statusBarHeight }}>
        <Toolbar
          centerElement="Iniciar Sesión"
          />
        <View style={styles.container}>
          <TextField
            label='Usuario'
            value={this.state.login}
            onChangeText={(input) => {this.setState({login: input})}}/>
          <TextField
            label='Contraseña'
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(input) => {this.setState({password: input})}}/>
            <View style={styles.buttonLogin}>
              <Button primary onPress={() => this.onLoginPress()} text="Iniciar sesión"/>
              <Button text="¿Has olvidado tu contraseña?"/>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:20,
    paddingRight:20,
  },
  buttonLogin: {
    marginTop: 25
  }
});
