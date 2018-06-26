import React, { Component } from 'react';
import Login from '../components/Login';
import { View, Dimensions } from 'react-native';

class LoginView extends Component {
  
  componentWillReceiveProps(nextProps) {
    console.log(this.props)
    if (nextProps.user !== undefined) {
      this.props.homeScreen()
    }
  }

  render () {
    // Full screen view
    var ScreenHeight = Dimensions.get("window").height;
    
    if(this.props.user !== undefined) {
       console.log("Logged!!")
    }
    return (
      <View style={{backgroundColor: 'white', height: ScreenHeight}}>
        <Login {...this.props}></Login>
      </View>
    )
  }
}

export default LoginView;
