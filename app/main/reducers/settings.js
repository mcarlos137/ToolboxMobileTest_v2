/**
 * @author [Carlos Molina](https://github.com/mcarlos137)
 * 
 * Initial values reducer states for persisted auth variables
 */
const initialState = {
    theme: 'light-content',
    appStarted: false
};

/**
 * @param {object} action  //action.type  - action.payload
 */
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