import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import ControllerView from '../views/ControllerView'

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user,
    controllerId: props.navigation.state.params.controllerId,
    houseId: props.navigation.state.params.houseId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goBack : () => dispatch(NavigationActions.back()),
    goProgramation : (kindProgramation, devices, controllerId, houseId) => dispatch(NavigationActions.navigate({routeName: 'NewProgramation',
      params: { kindProgramation: kindProgramation, devices: devices, controllerId : controllerId, houseId: houseId }
    }))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ControllerView)
