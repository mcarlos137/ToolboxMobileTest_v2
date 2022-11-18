//PRINCIPAL
import React from "react";
import {
  View,
} from "react-native";
//STORES
import { settingsStore } from "../../main/stores";
//SUBSCRIPTIONS
import { subscribeLoginStore } from "./subscriptions";
import { subscribeAuthPersistedStore } from "../../main/subscriptions";
//COMPONENTS
import Body from './components/Body'

const LoginScreen = ({ navigation }) => {

  var unsubscribeLoginStore
  var unsubscribeAuthPersistedStore

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("FOCUS ON LOGIN");
      //START SUBSCRIPTIONS
      unsubscribeLoginStore = subscribeLoginStore(navigation)
      //START ACTIONS
      if (!settingsStore.getState().appStarted) {
        unsubscribeAuthPersistedStore = subscribeAuthPersistedStore()
      }
    });
    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      console.log("OUT OF LOGIN");
      unsubscribeAll()
    });
    return unsubscribe;
  }, [navigation]);

  const unsubscribeAll = () => {
    unsubscribeLoginStore()
  };

  return (
    <Body />
  );
};

export default LoginScreen;
