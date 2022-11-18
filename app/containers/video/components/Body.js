//MAIN
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import Video from 'react-native-video'
import { useTheme } from 'react-native-paper';

const Component = ({
    videoUrl,
}) => {
    const { colors } = useTheme();
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