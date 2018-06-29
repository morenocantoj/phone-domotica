import { connect } from 'react-redux'
import HouseView from '../views/HouseView'
import { NavigationActions } from 'react-navigation';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
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
)(HouseView)
