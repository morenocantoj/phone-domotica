import React from 'react'
import PropTypes from 'prop-types';
import LoginContainer from './containers/LoginContainer'
import HomeContainer from './containers/HomeContainer'
import HouseContainer from './containers/HouseContainer'
import ControllerContainer from './containers/ControllerContainer'
import DevicesContainer from './containers/DevicesContainer'

// Redux connection
import { connect } from 'react-redux'
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
);

// App navigation
const RootNavigator = createStackNavigator({
  Login: { screen: LoginContainer },
  Home: { screen: HomeContainer },
  House: { screen: HouseContainer },
  Controller: { screen: ControllerContainer },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

// Controller tabs navigation (dont use redux)
const ControllerNavigator = createMaterialTopTabNavigator({
  Devices: {
    screen: DevicesContainer,
    navigationOptions: () => ({
      title: 'Dispositivos'
    })
  }
},
{
  tabBarOptions: {
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    activeTintColor: 'white',
    tabStyle: {
      width: 130
    },
    style: {
      backgroundColor: '#2196F3',
    },
    indicatorStyle: {
      backgroundColor: 'white',
    },
  }
})

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware, ControllerNavigator };
