/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//MAIN
import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
//STORES
import { settingsPersistedStore, settingsPersistor } from './app/main/stores';
//COMPONENTS
import App_Theme from './App_Theme'

const App: () => Node = () => {
  return (
    <Provider store={settingsPersistedStore} >
      <PersistGate loading={null} persistor={settingsPersistor}>
        <App_Theme />
      </PersistGate>
    </Provider>
  );
};

export default App;
