import { API_URL } from './urls';
import { Alert } from 'react-native'

export const signIn = (user) => {
  console.log("signIn")
    const url = API_URL+'/login';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    }).then(function (response) {
        if (response.ok) {
            return response.json();
        }
    });
}

export const getHouses = (body) => {
  console.log("GET Houses");
  const url = API_URL+'/casas';

  return fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + body.token
    }
    })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.log("Error geting data from ");
      return error.json();
    });
}

export const getHouse = (houseId) => {
  console.log("GET House");
  const url = API_URL + '/casas/' + houseId;

  return fetch(url).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    return error.json();
  })
}

export const getController = (houseId, controllerId) => {
  console.log("GET Controller");
  const url = API_URL + '/casas/' + houseId + '/controller/' + controllerId;

  return fetch(url).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    return error.json();
    Alert.alert("Error", "¡Imposible acceder a tus datos de la zona actual!")
  })
}

export const deleteDevice = (body) => {
  console.log("DELETE device");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/regulador/'+body.deviceId;

  return fetch(url, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + body.token
    }
  }).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    return error.json();
  });
}

export const editDevice = (body) => {
  console.log("PUT device");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/regulador/'+body.deviceId;

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body.temperatura)

  }).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    return error.json();
  })
}

export const programDevice = (body) => {
  console.log("PUT program device")
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/programacion'

  var jsonBody = {
    dispositivo_id: body.deviceId,
    fecha: body.fecha,
    action: 'PUT temperatura ' + body.clima
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonBody)

  }).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    return error.json();
  })
}

export const programLightDevice = (body) => {
  console.log("PUT program device")
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/programacion'
  var engage = body.engage ? 'ON' : 'OFF'

  var jsonBody = {
    dispositivo_id: body.deviceId,
    fecha: body.fecha,
    action: 'PUT light ' + engage
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonBody)

  }).then(function (response) {
    return response.json();
  })
  .catch(function (error) {
    return error.json();
  })
}

export const editDeviceLight = (body) => {
  console.log("PUT device light");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId+'/luz/'+body.deviceId;

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'status': body.status
    })

  }).then(function (response) {
    if (response.status != "200") {
      Alert.alert("Error", "¡No se ha podido realizar la acción!")
    }
  })
  .catch(function (error) {
    console.log(error)
    Alert.alert("Error de conexión", "¡Imposible acceder a tus datos del controlador actual!")
    return error;
  })
}

export const createDevice = (body) => {
  console.log("POST device");
  const url = API_URL+'/casas/'+body.houseId+'/controller/'+body.controllerId;

  return fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + body.token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({nombre: body.nombre})
  }).then(function (response) {
    console.log(response);
    return response.json();

  }).catch(function (error) {
    console.log(error);
    return error;
  })
}
