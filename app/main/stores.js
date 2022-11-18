/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
* 
* Defining stores for reducers
*/

import { createStore, applyMiddleware, compose } from "redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import authReducer from "./reducers/auth";
import settingsReducer from "./reducers/settings";
import { noAction, decorateResponse } from "./middlewares";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistAuthConfig = {
    key: 'auth',
    storage: AsyncStorage,
    whitelist: ['type', 'token'],
};

const authPersistedReducer = persistReducer(persistAuthConfig, authReducer)

export const authStore = createStore(
    authReducer,
    storeEnhancers(applyMiddleware(noAction, thunk))
);

export const authPersistedStore = createStore(
    authPersistedReducer,
    storeEnhancers(applyMiddleware(noAction, thunk))
);

export const authPersistor = persistStore(authPersistedStore);

const persistSettingsConfig = {
    key: 'settings',
    storage: AsyncStorage,
    whitelist: ['theme'],
};

const settingsPersistedReducer = persistReducer(persistSettingsConfig, settingsReducer)

export const settingsStore = createStore(
    settingsReducer,
    storeEnhancers(applyMiddleware(noAction, thunk))
);

export const settingsPersistedStore = createStore(
    settingsPersistedReducer,
    storeEnhancers(applyMiddleware(noAction, thunk))
);

export const settingsPersistor = persistStore(settingsPersistedStore);