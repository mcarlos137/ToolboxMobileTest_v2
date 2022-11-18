//STORES
import { authPersistedStore } from "./stores"

export const subscribeAuthPersistedStore = () => {
    const unsubscribe = authPersistedStore.subscribe(() => {
        console.log('type', authPersistedStore.getState().type)
        console.log('token', authPersistedStore.getState().token)
    })
    return unsubscribe;
}