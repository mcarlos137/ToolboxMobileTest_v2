//MAIN
import { Alert } from "react-native";
import { CommonActions } from "@react-navigation/native";
//STORES
import { loginStore } from "./stores";
import { authPersistedStore } from "../../main/stores";
import { getDataStore } from "../carrousels/stores";
//ACTIONS
import { getData } from "../carrousels/actions";

export const subscribeLoginStore = (navigation) => {
    const unsubscribe = loginStore.subscribe(() => {
        if (loginStore.getState().responseStatus !== '200') {
            Alert.alert('Login request failed', [
                { text: 'Ok' }
            ]);
            return
        }
        authPersistedStore.dispatch({
            type: 'SET_AUTH_PARAMS', payload:
            {
                type: loginStore.getState().type,
                token: loginStore.getState().token,
                //time: new Date().getTime(),
            }
        });
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