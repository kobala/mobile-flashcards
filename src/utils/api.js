import { AsyncStorage } from 'react-native'
import { getDecks, DECKS_STORAGE_KEY } from './_flashCards'

export function fetchDeckResults () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(getDecks)
}