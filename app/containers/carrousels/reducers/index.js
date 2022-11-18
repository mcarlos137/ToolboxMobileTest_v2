/**
 * @author [Carlos Molina](https://github.com/mcarlos137)
 * 
 * Initial value for reducer states for screens variables
 */
const initialState = {
    data: [],
    theme: 'light-content'
};

/**
 * @param {object} action  //action.type  - action.payload
 */
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