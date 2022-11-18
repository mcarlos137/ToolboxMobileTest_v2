/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';
import {
    Provider as PaperProvider,
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
//Components
import RootStackScreen from './screens/RootStackScreen';
import { authPersistedStore, authPersistor } from './app/main/stores';

//Connected props from settings persistent context
const mapStateToProps = state => {
    return {
        theme: state.theme,
    };
};
//Connected component from settings persistent context
const ConnectedComponent = ({
    theme,
}) => {
    //Default Themes props for light (navigation and paper)
    const CustomDefaultTheme = {
        ...NavigationDefaultTheme,
        ...PaperDefaultTheme,
        colors: {
            ...NavigationDefaultTheme.colors,
            ...PaperDefaultTheme.colors,
            text: 'black',
            icon: '#333333',
            primaryBackground: '#eeeeee',
            secundaryBackground: '#dddddd',
            border: 'black',
            placeholderText: 'silver',
            chart1: '#FFD08C',
            chart2: '#C0B7F7',
            chart3: '#8CEAFF',
            chart4: '#FF8C9D',
            chart5: '#F28CFF',
            chart6: '#FA9189',
            backdrop: 'rgba(255, 255, 255, 0.5)',
        }
    }
    //Default Themes props for dark (navigation and paper)
    const CustomDarkTheme = {
        ...NavigationDarkTheme,
        ...PaperDarkTheme,
        colors: {
            ...NavigationDarkTheme.colors,
            ...PaperDarkTheme.colors,
            text: 'white',
            icon: '#eeeeee',
            primaryBackground: '#202020',
            secundaryBackground: '#363439',
            border: 'white',
            placeholderText: 'silver',
            chart1: '#FFD119',
            chart2: '#3716F2',
            chart3: '#05CFFC',
            chart4: '#469903',
            chart5: '#DE05FA',
            chart6: '#FA1B0A',
            backdrop: 'rgba(0, 0, 0, 0.5)',
        }
    }
    /** 
    * Main Component
    * 
    * Including Paper context, Navigation context, status bar and auth persistence (type and token)
    */
    return (
        <PaperProvider theme={theme === 'dark-content' ? CustomDarkTheme : CustomDefaultTheme}>
            <NavigationContainer theme={theme === 'dark-content' ? CustomDarkTheme : CustomDefaultTheme}>
                <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={theme === 'dark-content' ? 'light-content' : 'dark-content'} animated={true} networkActivityIndicatorVisible={true} />
                <Provider store={authPersistedStore} >
                    <PersistGate loading={null} persistor={authPersistor}>
                        <RootStackScreen />
                    </PersistGate>
                </Provider>
            </NavigationContainer>
        </PaperProvider>
    )
};

const Component = connect(mapStateToProps)(ConnectedComponent);

export default Component;