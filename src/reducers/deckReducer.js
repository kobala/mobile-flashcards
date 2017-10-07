import { GET_ALL_DECKS_SUCCESS, ADD_NEW_DECK_SUCCESS } from '../actions/actionTypes'

function decks(state = {}, action) {
    switch (action.type) {
        case GET_ALL_DECKS_SUCCESS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_NEW_DECK_SUCCESS:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}

export default decks