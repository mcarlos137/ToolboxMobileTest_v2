/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main libraries
import React from 'react';
import {
    View,
    Dimensions,
    Text,
    FlatList
} from 'react-native';
import { useTheme } from 'react-native-paper';
//Components
import { ImagePresseable } from './Body_ImagePresseable';

/** 
* Child Component
*
* @param {object} item
* @param {function<item>} onPressImagePresseable
*/
export const Carrousel = ({
    item,
    onPressImagePresseable
}) => {
    //Injecting theme from paper libraries
    const { colors } = useTheme();
    //Extracting values from object
    const { type, title, items } = item;
    //Component return
    return (
        <View
            style={{
                marginVertical: 10
            }}
        >
            <Text
                style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: colors.text
                }}
            >
                {title}
            </Text>
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <ImagePresseable
                        type={type}
                        item={item}
                        onPressImagePresseable={onPressImagePresseable}
                    />
                )}
                style={{
                    alignSelf: 'flex-start',
                    marginTop: 10,
                    width: Dimensions.get('window').width * 0.9,
                    height: type !== 'thumb' ? 240 : 165
                }}
                horizontal={true}
                keyExtractor={item => Math.random().toString(36).slice(2, 7)}
                getItemLayout={(data, index) => ({ index, length: Dimensions.get('window').width * 0.9 / 2, offset: Dimensions.get('window').width * 0.9 * index / 2 })}
                removeClippedSubviews={true}
                initialNumToRender={2}
                maxToRenderPerBatch={1}
                updateCellsBatchingPeriod={100}
                windowSize={7}
            />
        </View>
    )
};
