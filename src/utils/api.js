import { AsyncStorage } from 'react-native'
import { getDecks, DECKS_STORAGE_KEY } from './_flashCards'

export function fetchDeckResults () {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(getDecks)
}

export function createNewDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function addCardToDeck({card, title}) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (error, result) => {
        const deckList = JSON.parse(result)

        const questions = [...JSON.parse(JSON.stringify(deckList[title].questions)), card]

        const value = JSON.stringify({
            [title]: {title, questions},
        })

        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value)
    })
}