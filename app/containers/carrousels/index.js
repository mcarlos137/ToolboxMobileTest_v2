//PRINCIPAL
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Provider } from "react-redux";
//STORES
import { indexStore, getDataStore } from './stores';
import { authPersistedStore, settingsPersistedStore } from '../../main/stores';
//ACTIONS
import { getData } from './actions';
//SUBSCRIPTIONS
import { subscribeGetDataStore } from './subscriptions';
//COMPONENTS
import Body from './components/Body'

const CarrouselsContainer = ({ navigation, route }) => {

    var unsubscribeGetDataStore

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('FOCUS ON CARROUSELS')
            //START SUBSCRIPTIONS
            unsubscribeGetDataStore = subscribeGetDataStore(navigation)
            //FOCUS ACTIONS
            getDataStore.dispatch(getData(authPersistedStore.getState().type, authPersistedStore.getState().token, true))
            indexStore.dispatch({ type: 'SET_CARROUSELS_THEME', payload: settingsPersistedStore.getState().theme })
        });
        return unsubscribe;
    }, [navigation]);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log('OUT OF CARROUSELS')
            unsubscribeAll();
        });
        return unsubscribe;
    }, [navigation]);

    const unsubscribeAll = () => {
        unsubscribeGetDataStore()
    };

    return (
        <Provider store={indexStore} >
            <Body navigation={navigation} />
        </Provider>
    );
}

export default CarrouselsContainer;
