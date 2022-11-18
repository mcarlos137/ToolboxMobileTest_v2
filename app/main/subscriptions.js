/**  
* @author [Carlos Molina](https://github.com/mcarlos137)
*/

//Stores (REDUX)
import { authPersistedStore } from "./stores"

//Subscription triggered after authPersistedStore values changes
export const subscribeAuthPersistedStore = () => {
    const unsubscribe = authPersistedStore.subscribe(() => {
        console.log('type', authPersistedStore.getState().type)
        console.log('token', authPersistedStore.getState().token)
    })
    return unsubscribe;
}