import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Provider} from 'react-redux';
import store from './store/Store';
import { AppNavigator } from './Navigator';
import { COLOR, ThemeProvider } from 'react-native-material-ui';

const uiTheme = {
  palette: {
      primaryColor: COLOR.blue,
  },
  toolbar: {
      container: {
          height: 50,
      },
  },
};


export default class App extends React.Component {
  render() {
      return (
        <Provider store={store}>
          <ThemeProvider uiTheme={uiTheme}>
            <AppNavigator/>
          </ThemeProvider>
        </Provider>
      );
  }
}
