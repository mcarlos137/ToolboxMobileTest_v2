/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useTheme } from 'react-native-paper';

/** 
* Child Component
*
* @param {function} onPressButtonLogout
*/
export const ButtonLogout = ({
    onPressButtonLogout,
}) => {
    //Injecting theme from paper libraries
    const { colors } = useTheme();

    //Component return
    return (
        <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => {
                onPressButtonLogout()
            }}
        >
            <Text
                style={styles.logoutButtonText}
            >
                LOGOUT
            </Text>
        </TouchableOpacity>
    )
};

//Styling variables
const styles = StyleSheet.create({
    logoutButton: {
        backgroundColor: 'rgb(214, 14, 31)',
        padding: 9,
        borderRadius: 5,
        alignSelf: 'center'
    },
    logoutButtonText: {
        color: 'white',
        fontWeight: '600'
    },
});
