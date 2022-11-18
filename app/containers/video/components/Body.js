/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Video from 'react-native-video'
import { useTheme } from 'react-native-paper';

/** 
* Parent Component 
*   
* @param {string} videoUrl
*/
const Component = ({
    videoUrl,
}) => {
    //Injecting theme from paper libraries
    const { colors } = useTheme();
    //Component return
    return (
        <View
            style={[styles.container, { backgroundColor: colors.primaryBackground }]}
        >
            <Video
                source={{ uri: videoUrl }}
                resizeMode='cover'
                style={styles.video}
                controls={true}
            />
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video: {
        width: 400,
        height: 300,
        marginTop: 50,
        alignSelf: 'center'
    },
});

export default Component;