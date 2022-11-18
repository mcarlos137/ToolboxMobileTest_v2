//MAIN
import React from 'react';
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
} from 'react-native';
import * as Animatable from "react-native-animatable";
import { useTheme } from 'react-native-paper';
//STORES
import { loginStore } from '../stores';
//ACTIONS
import { login } from '../actions';
//COMPONENTS
import { ButtonLogin } from './Body_ButtonLogin';

const Component = ({ }) => {
    const { colors } = useTheme();

    const onPressButtonLogin = () => {
        loginStore.dispatch(login())
    }

    return (
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require("../../../../assets/toolbox_logo.jpg")}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[styles.footer, { backgroundColor: colors.primaryBackground },]}
                animation="fadeInUpBig"
            >
                <Text
                    style={[styles.footerText, { color: colors.text }]}
                >
                    The most exclusive content for Premium Toolbox Users
                </Text>
                <ButtonLogin
                    onPressButtonLogin={onPressButtonLogin}
                />
            </Animatable.View>
        </View>
    )
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(214, 14, 31)',
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 0.5,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    footerText: {
        fontSize: 18,
        marginBottom: 30,
        fontWeight: '400',
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
});


export default Component;