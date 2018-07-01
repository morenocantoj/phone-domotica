import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import ControllerView from '../views/ControllerView'

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user,
    controllerId: props.navigation.state.params.controllerId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goBack : () => dispatch(NavigationActions.back())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControllerView)
