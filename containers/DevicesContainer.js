import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import DevicesView from '../views/DevicesView'

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user,
    devices: props.controller.dispositivos
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
)(DevicesView)
