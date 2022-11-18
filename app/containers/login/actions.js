export const login = () => {
    let url = 'https://echo-serv.tbxnet.com';
    let path = '/v1/mobile/auth';
    let method = 'POST';
    let body = {
        sub: 'ToolboxMobileTest',
    }
    return function (dispatch) {
        return fetch(url + path,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }
        )
            .then(handleErrors)
            .then(response =>
                response.json())
            .then(json => {
                dispatch({ type: 'SET_LOGIN_PARAMS', payload: json });
            })
            .catch(error => {
                console.log('SET_LOGIN_RESPONSE_STATUS' + ' ' + error)
                dispatch({ type: 'SET_LOGIN_RESPONSE_STATUS', payload: error.message });
            });
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
}
