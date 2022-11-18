/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import { Alert } from "react-native";
import { CommonActions } from "@react-navigation/native";
//Stores (REDUX)
import { loginStore } from "./stores";
import { authPersistedStore } from "../../main/stores";

//Subscription triggered after login API returns value
export const subscribeLoginStore = (navigation) => {
    const unsubscribe = loginStore.subscribe(() => {
        //Evaluating if response is OK
        if (loginStore.getState().responseStatus !== '200') {
            Alert.alert('Login request failed', '', [
                { text: 'Ok' }
            ]);
            return
        }
        //Settings persisted values for AUTH from login API response
        authPersistedStore.dispatch({
            type: 'SET_AUTH_PARAMS', payload:
            {
                type: loginStore.getState().type,
                token: loginStore.getState().token,
                //time: new Date().getTime(),
            }
        });
        //Go to CarrouselsScreen but reseting routes to avoid goBack to login when is already logued
        navigation.dispatch((state) => {
            const routes = [{ name: 'CarrouselsScreen', params: null }];
            return CommonActions.reset({
                ...state,
                routes,
                index: routes.length - 1,
            });
        });
    })
    return unsubscribe;
}