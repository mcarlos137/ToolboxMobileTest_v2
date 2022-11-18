/**
 * @author [Carlos Molina](https://github.com/mcarlos137)
 * 
 * Initial values reducer states for get data service response
 */
const initialState = {
    data: [],
    responseStatus: '200',
};

/**
 * @param {object} action  //action.type  - action.payload
 */
function rootReducer(state = initialState, action) {
    if (action.type === 'GET_DATA') {
        return Object.assign({}, state, {
            token1: state.data = action.payload,
            token2: state.responseStatus = '200',
        });
    }
    if (action.type === 'GET_DATA_RESPONSE_STATUS') {
        return Object.assign({}, state, {
            error: state.responseStatus = action.payload,
        });
    }
    return state;
}

export default rootReducer;