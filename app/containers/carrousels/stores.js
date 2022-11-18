/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
* 
* Defining stores for reducers
*/

import { createStore, applyMiddleware, compose } from "redux";
import indexReducer from "./reducers/index";
import getDataReducer from "./reducers/getData";
import { noAction } from "./middlewares";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const indexStore = createStore(
    indexReducer,
    storeEnhancers(applyMiddleware(noAction, thunk))
);

export const getDataStore = createStore(
    getDataReducer,
    storeEnhancers(applyMiddleware(noAction, thunk))
);
