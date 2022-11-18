//MAIN
import React from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useTheme } from 'react-native-paper';

export const ButtonLogout = ({
    onPressButtonLogout,
}) => {
    const { colors } = useTheme();
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
