//MAIN
import { Alert } from "react-native";
import { CommonActions } from "@react-navigation/native";
//STORES
import { getDataStore, indexStore } from "./stores";
import { authPersistedStore } from "../../main/stores";

export const subscribeGetDataStore = (navigation) => {
    const unsubscribe = getDataStore.subscribe(() => {
        if (getDataStore.getState().responseStatus !== '200') {
            console.log('responseStatus', getDataStore.getState().responseStatus)
            if (getDataStore.getState().responseStatus === '401') {
                authPersistedStore.dispatch({
                    type: 'SET_AUTH_PARAMS', payload:
                    {
                        type: '',
                        token: '',
                        //time: new Date().getTime(),
                    }
                });
                navigation.dispatch((state) => {
                    const routes = [{ name: 'LoginScreen', params: null }];
                    return CommonActions.reset({
                        ...state,
                        routes,
                        index: routes.length - 1,
                    });
                });
                Alert.alert('Token expires.', [
                    { text: 'Ok' }
                ])
                return
            }
            Alert.alert('There is a connection or server problem. Try again.', [
                { text: 'Ok' }
            ])
            return
        }
        indexStore.dispatch({ type: 'SET_CARROUSELS_DATA', payload: getDataStore.getState().data });
    })
    return unsubscribe;
}