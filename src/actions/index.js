import * as actionTypes from '../actions/actionTypes'

export const getDecks = decks => ({
    type: actionTypes.GET_ALL_DECKS_SUCCESS,
    decks
})


export const addDeck = deck => ({
    type: actionTypes.ADD_NEW_DECK_SUCCESS,
    deck
})

export const addCardToDeck = (title, card) => ({
    type: actionTypes.ADD_NEW_CARD_TO_DECK_SUCCESS,
    title,
    card
})