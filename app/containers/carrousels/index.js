//Principal libraries
import React from 'react';
import { Provider } from "react-redux";
//Stores (REDUX)
import { indexStore, getDataStore } from './stores';
import { authPersistedStore, settingsPersistedStore } from '../../main/stores';
//Actions
import { getData } from './actions';
//Subscriptions
import { subscribeGetDataStore } from './subscriptions';
//Components
import Body from './components/Body'

/** 
* Main Component 
*   
* @param {object} navigation - injected from navigation stack
* @param {object} route - injected from navigation stack
*/
const CarrouselsContainer = ({ navigation, route }) => {

    //Variables to handle unsubscriptions actions
    var unsubscribeGetDataStore

    //Using effect when focus navigation scope
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('FOCUS ON CARROUSELS')
            //Start subscriptions
            unsubscribeGetDataStore = subscribeGetDataStore(navigation)
            //Start actions
            //Retrieving data for carrousels
            getDataStore.dispatch(getData(authPersistedStore.getState().type, authPersistedStore.getState().token, true))
            //Setting screen store with persisted value of theme (to hav the same even if app is closed and reopened)
            indexStore.dispatch({ type: 'SET_CARROUSELS_THEME', payload: settingsPersistedStore.getState().theme })
        });
        return unsubscribe;
    }, [navigation]);

    //Using effect when blur navigation scope
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log('OUT OF CARROUSELS')
            unsubscribeAll();
        });
        return unsubscribe;
    }, [navigation]);

    //Call unsusbcribe to avoid multiple subscriptions mounted at a time
    const unsubscribeAll = () => {
        unsubscribeGetDataStore()
    };

    //Component return injecting indexStore context to update carrousels whenre stores changes values
    return (
        <Provider store={indexStore} >
            <Body navigation={navigation} />
        </Provider>
    );
}

export default CarrouselsContainer;
