const initialState = {
    data: [],
    responseStatus: '200',
};

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