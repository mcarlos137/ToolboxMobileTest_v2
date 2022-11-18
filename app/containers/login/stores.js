/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
* 
* Defining stores for reducers
*/

import { createStore, applyMiddleware, compose } from "redux";
import loginReducer from "./reducers/login";
import { noAction } from "./middlewares";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const loginStore = createStore(
    loginReducer,
    storeEnhancers(applyMiddleware(noAction, thunk))
);
