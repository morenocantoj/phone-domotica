import { connect } from 'react-redux'
import HouseView from '../views/HouseView'
import { NavigationActions } from 'react-navigation';

const mapStateToProps = (state, props) => {
  return {
    user: state.auth.user,
    houseId: props.navigation.state.params.houseId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    goBack : () => dispatch(NavigationActions.back()),
    controllerScreen : (houseId, controllerId) => dispatch(NavigationActions.navigate({routeName: 'Controller',
      params: { controllerId : controllerId, houseId: houseId }
    }))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HouseView)
