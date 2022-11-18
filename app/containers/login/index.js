/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main librries
import React from "react";
//Stores (REDUX)
import { settingsStore } from "../../main/stores";
//Subscriptions
import { subscribeLoginStore } from "./subscriptions";
import { subscribeAuthPersistedStore } from "../../main/subscriptions";
//Components
import Body from './components/Body'

/** 
* Main Component 
*   
* @param {object} navigation - injected from navigation stack
*/
const LoginScreen = ({ navigation }) => {

  //Variables to handle unsubscriptions actions
  var unsubscribeLoginStore
  var unsubscribeAuthPersistedStore

  //Using effect when focus navigation scope
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      console.log("FOCUS ON LOGIN");
      //Start subscriptions
      unsubscribeLoginStore = subscribeLoginStore(navigation)
      if (!settingsStore.getState().appStarted) {
        unsubscribeAuthPersistedStore = subscribeAuthPersistedStore()
      }
    });
    return unsubscribe;
  }, [navigation]);

  //Using effect when blur navigation scope
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      console.log("OUT OF LOGIN");
      unsubscribeAll()
    });
    return unsubscribe;
  }, [navigation]);

  //Call unsusbcribe to avoid multiple subscriptions mounted at a time
  const unsubscribeAll = () => {
    unsubscribeLoginStore()
  };

  //Component return
  return (
    <Body />
  );
};

export default LoginScreen;
