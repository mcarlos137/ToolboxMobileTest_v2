/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Main librries
import React from 'react';
//COMPONENTS
import Body from './components/Body'

/** 
* Main Component 
*   
* @param {object} navigation - injected from navigation stack
* @param {object} route - injected from navigation stack
*/
const VideoContainer = ({ navigation, route }) => {

    //Using effect when focus navigation scope
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('FOCUS ON VIDEO')
            //Changing title of navigator header
            navigation.setOptions({
                title: route.params.currentVideoTitle
            })
        });
        return unsubscribe;
    }, [navigation]);

    //Using effect when blur navigation scope
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            console.log('OUT OF VIDEO')
        });
        return unsubscribe;
    }, [navigation]);

    //Component return
    return (
        <Body videoUrl={route.params.currentVideoUrl} />
    );
}

export default VideoContainer;
