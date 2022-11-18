const initialState = {
    data: [],
    theme: 'light-content'
};

function rootReducer(state = initialState, action) {
    if (action.type === 'SET_CARROUSELS_DATA') {
        return Object.assign({}, state, {
            token: state.data = action.payload,
        });
    }
    if (action.type === 'SET_CARROUSELS_THEME') {
        return Object.assign({}, state, {
            token: state.theme = action.payload,
        });
    }
    return state;
}

export default rootReducer;