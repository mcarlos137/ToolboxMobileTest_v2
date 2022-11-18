const initialState = {
    theme: 'light-content',
    appStarted: false
};

function rootReducer(state = initialState, action) {
    if (action.type === 'SET_SETTINGS_THEME') {
        return Object.assign({}, state, {
            token: state.theme = action.payload,
        });
    }
    if (action.type === 'SET_SETTINGS_APP_STARTED') {
        return Object.assign({}, state, {
            token: state.appStarted = action.payload,
        });
    }
    return state;
}

export default rootReducer;