//MAIN
import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import { useTheme } from 'react-native-paper';
//COMPONENTS
import { ButtonLogout } from './Body_Actions_ButtonLogout';
import { SwitchTheme } from './Body_Actions_SwitchTheme';


export const Actions = ({
    theme,
    changeSwitchThemeValue,
    onPressButtonLogout
}) => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: Dimensions.get('window').width,
                justifyContent: 'flex-end',
                marginTop: 20,
                paddingRight: 20
            }}
        >
            <SwitchTheme
                theme={theme}
                changeSwitchThemeValue={changeSwitchThemeValue}
            />
            <ButtonLogout
                onPressButtonLogout={onPressButtonLogout}
            />
        </View>
    )
}
