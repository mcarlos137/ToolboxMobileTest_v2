/**
 * @author [Carlos Molina](https://github.com/mcarlos137)
 * 
 * Initial values reducer states for persisted auth variables
 */
const initialState = {
    type: '',
    token: '',
};

/**
 * @param {object} action  //action.type  - action.payload
 */
function rootReducer(state = initialState, action) {
    if (action.type === 'SET_AUTH_PARAMS') {
        return Object.assign({}, state, {
            token1: state.type = action.payload.type,
            token2: state.token = action.payload.token,
        });
    }
    return state;
}

export default rootReducer;