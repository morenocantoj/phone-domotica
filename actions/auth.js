import { signIn } from '../API/methods';
import { Alert } from 'react-native'

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const loginSuccess = (user) => {
  console.log("logginSuccess")
  return {
    type: LOGIN,
    user
  }
}

const logoutSuccess = () => {
  return {
    type: LOGOUT
  }
}

export const login = (username, password) => {
  return function (dispatch)  {
    signIn({login: username, password: password}).then((body) => {
      const user = {
        name: username,
        token: body.token
      }
      dispatch(loginSuccess(user));
    })
    .catch((error) => {
      console.log("Error autenticando");
      Alert.alert("Inicio de sesión", "Usuario o contraseña incorrectos")
    });
  };
}

export const logout = () => {
  return function (dispatch) {
    console.log("logout");
    dispatch(logoutSuccess());
  };
}
