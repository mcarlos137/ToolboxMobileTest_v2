/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from 'react';
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
} from 'react-native';
import * as Animatable from "react-native-animatable";
import { useTheme } from 'react-native-paper';
//Stores (REDUX)
import { loginStore } from '../stores';
//Actions
import { login } from '../actions';
//Components
import { ButtonLogin } from './Body_ButtonLogin';

/** 
* Parent Component 
*/
const Component = ({ }) => {
    //Injecting theme from paper libraries
    const { colors } = useTheme();

    //Function triggered when onPress login button
    const onPressButtonLogin = () => {
        loginStore.dispatch(login())
    }
    //Component return
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

//Styling variables
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