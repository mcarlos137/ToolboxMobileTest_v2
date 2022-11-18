//MAIN
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
//STORES
import { authPersistedStore, settingsPersistedStore } from '../../../main/stores';
import { indexStore } from '../stores';
//COMPONENTS
import { Carrousel } from './Body_Carrousel';
import { Actions } from './Body_Actions';

const mapStateToProps = state => {
    return {
        data: state.data,
        theme: state.theme
    };
};

const ConnectedComponent = ({
    data,
    theme,
    navigation,
}) => {
    const { colors } = useTheme();

    const changeSwitchThemeValue = (value) => {
        settingsPersistedStore.dispatch({ type: 'SET_SETTINGS_THEME', payload: value })
        indexStore.dispatch({ type: 'SET_CARROUSELS_THEME', payload: value })
    }

    const onPressImagePresseable = (item) => {
        if (item.videoUrl === undefined || item.videoUrl === null || item.videoUrl === '') {
            Alert.alert('Video no disponible', [
                { text: 'Ok' }
            ]);
            return
        }
        navigation.dispatch(StackActions.push('VideoScreen', { currentVideoUrl: item.videoUrl, currentVideoTitle: item.title }));
    }

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

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default Component;