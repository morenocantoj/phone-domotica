import HomeView from "../views/HomeView";
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    houseScreen : (houseId) => dispatch(NavigationActions.navigate({routeName: 'House',
      params: { houseId : houseId }
    }))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
