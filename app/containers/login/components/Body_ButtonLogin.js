//MAIN
import React from 'react';
import {
    Dimensions,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import * as Animatable from "react-native-animatable";
import { useTheme } from 'react-native-paper';

export const ButtonLogin = ({ 
    onPressButtonLogin
}) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
                onPressButtonLogin()
            }}
        >
            <Text
                style={styles.loginButtonText}
            >
                LOGIN
            </Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: 'rgb(214, 14, 31)',
        padding: 9,
        borderRadius: 5,
        alignSelf: 'center'
    },
    loginButtonText: {
        color: 'white',
        fontWeight: '600'
    },
});
