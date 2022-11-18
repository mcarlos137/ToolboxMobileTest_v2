//PRINCIPAL
import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Provider } from "react-redux";
//STORES
import { indexStore, getDataStore } from './stores';
import { authPersistedStore } from '../../main/stores';
//ACTIONS
import { getData } from './actions';
//SUBSCRIPTIONS
import { subscribeGetDataStore } from './subscriptions';
//COMPONENTS
import Body from './components/Body'

const VideoContainer = ({ navigation, route }) => {

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('FOCUS ON VIDEO')
            navigation.setOptions({
                title: route.params.currentVideoTitle
            })
        });
        return unsubscribe;
    }, [navigation]);

    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log('OUT OF VIDEO')
            unsubscribeAll();
        });
        return unsubscribe;
    }, [navigation]);

    const unsubscribeAll = () => {
    };

    return (
        <Body videoUrl={route.params.currentVideoUrl} />
    );
}

export default VideoContainer;
