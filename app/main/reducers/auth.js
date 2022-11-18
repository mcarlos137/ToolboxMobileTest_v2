const initialState = {
    type: '',
    token: '',
};

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