import LoginView from "../views/LoginView";
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import { NavigationActions } from 'react-navigation';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {dispatch(login(username, password))},
    homeScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Home' }))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView)
