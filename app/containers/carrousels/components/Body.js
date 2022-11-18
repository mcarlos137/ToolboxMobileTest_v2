/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from 'react';
import {
    View,
    StyleSheet,
    Alert,
    FlatList,
} from 'react-native';
import { connect } from "react-redux";
import { CommonActions, StackActions } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
//Stores (REDUX)
import { authPersistedStore, settingsPersistedStore } from '../../../main/stores';
import { indexStore } from '../stores';
//Components
import { Carrousel } from './Body_Carrousel';
import { Actions } from './Body_Actions';

//Connected props from settings persistent context
const mapStateToProps = state => {
    return {
        data: state.data,
        theme: state.theme
    };
};

/** 
* Parent Component (Syncronized with REDUX at indexStore context)
*
* @param {object} navigation
*/
const ConnectedComponent = ({
    data,
    theme,
    navigation,
}) => {
    //Injecting theme from paper libraries
    const { colors } = useTheme();

    //Function triggered when change switch theme value
    const changeSwitchThemeValue = (value) => {
        settingsPersistedStore.dispatch({ type: 'SET_SETTINGS_THEME', payload: value })
        indexStore.dispatch({ type: 'SET_CARROUSELS_THEME', payload: value })
    }

    //Function triggered when onPress carrousel iamge
    const onPressImagePresseable = (item) => {
        if (item.videoUrl === undefined || item.videoUrl === null || item.videoUrl === '') {
            Alert.alert('Video no disponible', [
                { text: 'Ok' }
            ]);
            return
        }
        navigation.dispatch(StackActions.push('VideoScreen', { currentVideoUrl: item.videoUrl, currentVideoTitle: item.title }));
    }

    //Function triggered when onPress logout button
    const onPressButtonLogout = () => {
        authPersistedStore.dispatch({
            type: 'SET_AUTH_PARAMS', payload:
            {
                type: '',
                token: '',
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
    }

    //Component return
    return (
        <View
            style={styles.container}
        >
            <Actions
                theme={theme}
                changeSwitchThemeValue={changeSwitchThemeValue}
                onPressButtonLogout={onPressButtonLogout}
            />
            <View
                style={{
                    alignSelf: 'center',
                }}
            >
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <Carrousel
                            item={item}
                            onPressImagePresseable={onPressImagePresseable}
                        />
                    )}
                    keyExtractor={item => Math.random().toString(36).slice(2, 7)}
                    getItemLayout={(data, index) => ({ index, length: 600, offset: 600 * index })}
                    removeClippedSubviews={true}
                    initialNumToRender={2}
                    maxToRenderPerBatch={1}
                    updateCellsBatchingPeriod={100}
                    windowSize={7}
                    style={{
                        height: 600
                    }}
                />
            </View >
        </View>
    )
};

const Component = connect(mapStateToProps)(ConnectedComponent);

//Styling variables
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Component;