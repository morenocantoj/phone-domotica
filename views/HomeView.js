import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Toolbar, Button } from 'react-native-material-ui';
import { Constants } from 'expo';
import { getHouses } from '../API/methods'
import { Alert } from 'react-native'
import Houses from '../components/Houses'

class HomeView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user : this.props.user,
      houses: {}
    }
  }

  componentWillMount() {
    getHouses(this.props.user).then((response) => {
      this.setState({houses: response})
    })
    .catch((error) => {
      Alert.alert("Error", "¡Imposible acceder a tus datos!")
    })
  }

  render() {
    if(this.props.user === undefined) {
      console.log("Redirect to login!")
    }
    return (
      <View style={styles.viewContainer}>
        <Toolbar centerElement="Mis casas inteligentes"/>
          <ScrollView contentContainerStyle={styles.cardList}>
            <Houses houses={this.state.houses} {...this.props}/>
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: Constants.statusBarHeight
  },
  container: {
    paddingLeft:20,
    paddingRight:20,
  },
  cardList: {
    alignItems: 'center',
    width: '100%'
  },
});

export default HomeView;
