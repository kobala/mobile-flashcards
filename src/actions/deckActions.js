import { GET_ALL_DECKS_SUCCESS, ADD_NEW_DECK_SUCCESS } from '../actions/actionTypes'

export const getDecks = decks => ({
    type: GET_ALL_DECKS_SUCCESS,
    decks
})


export const addDeck = deck => ({
    type: ADD_NEW_DECK_SUCCESS,
    deck
})