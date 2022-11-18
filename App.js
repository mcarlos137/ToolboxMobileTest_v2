/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 * 
 * Mofidied by @author [Carlos Molina](https://github.com/mcarlos137)
 */

//Main libraries
import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
//Stores (REDUX)
import { settingsPersistedStore, settingsPersistor } from './app/main/stores';
//Components 
import App_Theme from './App_Theme'

/** 
 * Main Component
 * 
 * Including persisted state for setting
 */
const App = () => {
  return (
    <Provider store={settingsPersistedStore} >
      <PersistGate loading={null} persistor={settingsPersistor}>
        <App_Theme />
      </PersistGate>
    </Provider>
  );
};

export default App;
