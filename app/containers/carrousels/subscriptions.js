/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import { Alert } from "react-native";
import { CommonActions } from "@react-navigation/native";
//Stores (REDUX)
import { getDataStore, indexStore } from "./stores";
import { authPersistedStore } from "../../main/stores";

//Subscription triggered after getData API returns value
export const subscribeGetDataStore = (navigation) => {
    const unsubscribe = getDataStore.subscribe(() => {
        //Evaluating if response is OK
        if (getDataStore.getState().responseStatus !== '200') {
            console.log('responseStatus', getDataStore.getState().responseStatus)
            //Evaluating if response is 401 to logout inmediately
            if (getDataStore.getState().responseStatus === '401') {
                //Settings persisted values to default
                authPersistedStore.dispatch({
                    type: 'SET_AUTH_PARAMS', payload:
                    {
                        type: '',
                        token: '',
                        //time: new Date().getTime(),
                    }
                });
                //Go to LoginScreen but reseting routes to avoid goBack and param values
                navigation.dispatch((state) => {
                    const routes = [{ name: 'LoginScreen', params: null }];
                    return CommonActions.reset({
                        ...state,
                        routes,
                        index: routes.length - 1,
                    });
                });
                //Presenting message on screen
                Alert.alert('Token expires.', [
                    { text: 'Ok' }
                ])
                return
            }
            //Presenting message on screen (different error than 401)
            Alert.alert('There is a connection or server problem. Try again.', [
                { text: 'Ok' }
            ])
            return
        }
        //Setting data values for screen when response is OK
        indexStore.dispatch({ type: 'SET_CARROUSELS_DATA', payload: getDataStore.getState().data });
    })
    return unsubscribe;
}