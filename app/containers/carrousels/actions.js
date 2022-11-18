export const getData = (type, token, updateData) => {
    let url = 'https://echo-serv.tbxnet.com';
    let path = '/v1/mobile/data';
    let method = 'GET';
    return function (dispatch) {
        return fetch(url + path,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': type + ' ' + token
                }
            }
        )
            .then(handleErrors)
            .then(response => {
                return response.json()
            })
            .then(json => {
                if (updateData) {
                    dispatch({ type: 'GET_DATA', payload: json });
                }
            })
            .catch(error => {
                console.log('GET_DATA_RESPONSE_STATUS' + ' ' + error)
                dispatch({ type: 'GET_DATA_RESPONSE_STATUS', payload: error.message });
            });
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
}
