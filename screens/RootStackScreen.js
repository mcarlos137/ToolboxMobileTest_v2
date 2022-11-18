/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//Components
import LoginScreen from "../app/containers/login";
import CarrouselsScreen from "../app/containers/carrousels";
import VideoScreen from "../app/containers/video";
//Creating stack navigator
const RootStack = createStackNavigator();

/** 
* Main Component
* 
* Including 3 screen components LoginScreen, CarrouselsScreen, VideoScreen
*/
const RootStackScreen = ({ navigation, route }) => (
  <RootStack.Navigator>
    <RootStack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name="CarrouselsScreen"
      component={CarrouselsScreen}
      options={getOptions("Carrousels", 'rgb(214, 14, 31)')}
    />
    <RootStack.Screen
      name="VideoScreen"
      component={VideoScreen}
      options={getOptions("", 'rgb(214, 14, 31)')}
    />
  </RootStack.Navigator>
);

export default RootStackScreen;

/**
 * Change screen header for navigation stack
 *
 * @param {string} title
 * @param {string} backgroundColor
 */
const getOptions = (title, backgroundColor) => {
  let headerTitleAlign = 'center'
  return {
    title: title,
    headerStyle: { backgroundColor: backgroundColor },
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
    headerTitleAlign: headerTitleAlign,
    headerBackTitle: 'Back',
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
};
