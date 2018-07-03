import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import ProgramationView from '../views/ProgramationView'

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user,
    kindProgramation: props.navigation.state.params.kindProgramation,
    devices: props.navigation.state.params.devices,
    controllerId: props.navigation.state.params.controllerId,
    houseId: props.navigation.state.params.houseId
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
