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
    houseScreen : () => dispatch(NavigationActions.navigate({ routeName: 'House' }))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeView)
