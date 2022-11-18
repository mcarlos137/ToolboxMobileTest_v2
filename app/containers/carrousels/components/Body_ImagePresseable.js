//MAIN
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { useTheme } from 'react-native-paper';

export const ImagePresseable = ({
    type,
    item,
    onPressImagePresseable,
}) => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                width: type !== 'thumb' ? 140 : 230,
                height: type !== 'thumb' ? 230 : 140,
                marginHorizontal: 10,
                alignItems: 'center'
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    onPressImagePresseable(item)
                }}
            >
                <Image
                    resizeMode='stretch'
                    style={{
                        width: type !== 'thumb' ? 140 : 230,
                        height: type !== 'thumb' ? 230 : 140,
                    }}
                    source={{
                        uri: item.imageUrl,
                    }}
                />
            </TouchableOpacity>
            <Text
                style={{
                    marginTop: type !== 'thumb' ? -20 : 0,
                    fontWeight: '400',
                    color: colors.text
                }}
            >
                {item.title}
            </Text>
        </View>
    )
};
