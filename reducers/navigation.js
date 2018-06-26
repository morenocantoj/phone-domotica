import { RootNavigator } from '../Navigator'

const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const secondAction = RootNavigator.router.getActionForPathAndParams('Home');
const initialNavState = RootNavigator.router.getStateForAction(secondAction);

export default function reducer(state = tempNavState, action) {
  let nextState;

  switch (action.type) {
    case 'Login':
      nextState = RootNavigator.router.getStateForAction(
          NavigationActions.back(),
          state
        );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
