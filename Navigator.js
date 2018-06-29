import React from 'react'
import PropTypes from 'prop-types';
import LoginContainer from './containers/LoginContainer'
import HomeContainer from './containers/HomeContainer'
import HouseContainer from './containers/HouseContainer'

// Redux connection
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
);

const RootNavigator = createStackNavigator({
  Login: { screen: LoginContainer },
  Home: { screen: HomeContainer },
  House: { screen: HouseContainer },
},
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
})

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = (state) => ({
  state: state.navigation,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, AppNavigator, middleware };
