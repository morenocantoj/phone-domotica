import React, { Component } from 'react';
import { Toolbar, Button } from 'react-native-material-ui';
import { StyleSheet, Text, View } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      formErrors: {login: "", password: ""},
      loginValid: false,
      passwordValid: false,
      formValid: false,
    }
  }

  handleUserInput(name, value) {
    this.setState({[name]: value},
                () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let loginValid = this.state.loginValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'login':
        loginValid = value.length > 3;
        fieldValidationErrors.login = loginValid ? '' : 'Usuario demasiado corto (mínimo 4 caracteres)';
        break;
      case 'password':
        passwordValid = value.length > 3;
        fieldValidationErrors.password = passwordValid ? '' : 'Contraseña demasiada corto (mínimo 4 caracteres)';
        break;
      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
                  loginValid: loginValid,
                  passwordValid: passwordValid
                }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.loginValid && this.state.passwordValid});
  }

  onLoginPress() {
    this.props.login(this.state.login, this.state.password)
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
            onChangeText={(input) => {this.handleUserInput('login', input)}}
            error={this.state.formErrors.login}/>
          <TextField
            label='Contraseña'
            value={this.state.password}
            secureTextEntry={true}
            onChangeText={(input) => {this.handleUserInput('password', input)}}
            error={this.state.formErrors.password}/>
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
