/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import { useTheme } from 'react-native-paper';
//Components
import { ButtonLogout } from './Body_Actions_ButtonLogout';
import { SwitchTheme } from './Body_Actions_SwitchTheme';

/** 
* Child Component
*
* @param {string} theme
* @param {function<string>} changeSwitchThemeValue
* @param {function} onPressButtonLogout
*/
export const Actions = ({
    theme,
    changeSwitchThemeValue,
    onPressButtonLogout
}) => {
    //Injecting theme from paper libraries
    const { colors } = useTheme();
    
    //Component return
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
