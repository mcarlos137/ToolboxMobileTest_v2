/**
 * @author [Carlos Molina](https://github.com/mcarlos137)
 * 
 * Initial value reducer states for login service response
 */
const initialState = {
    type: '',
    token: '',
    responseStatus: '200',
};

/**
 * @param {object} action  //action.type  - action.payload
 */
function rootReducer(state = initialState, action) {
    if (action.type === 'SET_LOGIN_PARAMS') {
        return Object.assign({}, state, {
            token1: state.type = action.payload.type,
            token2: state.token = action.payload.token,
            token3: state.responseStatus ='200',
        });
    }
    if (action.type === 'SET_LOGIN_RESPONSE_STATUS') {
        return Object.assign({}, state, {
            error: state.responseStatus = action.payload,
        });
    }
    return state;
}

export default rootReducer;