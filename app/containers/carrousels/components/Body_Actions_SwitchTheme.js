//MAIN
import React from 'react';
import {
    View,
    Text,
    Switch
} from 'react-native';
import { useTheme } from 'react-native-paper';

export const SwitchTheme = ({
    theme,
    changeSwitchThemeValue,
}) => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <Text
                style={{
                    color: colors.text,
                    fontWeight: theme === 'light-content' ? 'bold' : 'normal'
                }}
            >
                light
            </Text>
            <Switch
                trackColor={{ false: "red", true: "gray" }}
                thumbColor={"#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={(value) => {
                    changeSwitchThemeValue(value ? 'dark-content' : 'light-content')
                }}
                value={theme === 'dark-content'}
                disabled={false}
                style={{
                    marginLeft: 5,
                    marginRight: 5
                }}
            />
            <Text
                style={{
                    color: colors.text,
                    fontWeight: theme === 'dark-content' ? 'bold' : 'normal',
                    marginRight: 20
                }}
            >
                dark
            </Text>
        </View>
    )
}
