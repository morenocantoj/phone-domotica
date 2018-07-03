import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import ProgramationView from '../views/ProgramationView'

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user,
    kindProgramation: props.navigation.state.params.kindProgramation,
    devices: props.navigation.state.params.devices
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
)(ProgramationView)
