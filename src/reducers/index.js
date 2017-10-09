import * as actionTypes from '../actions/actionTypes'

function decks(state = {}, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_DECKS_SUCCESS:
            return {
                ...state,
                ...action.decks
            }
        case actionTypes.ADD_NEW_DECK_SUCCESS:
            return {
                ...state,
                ...action.deck
            }
        case actionTypes.ADD_NEW_CARD_TO_DECK_SUCCESS:
            const { title, card } = action

            const questions = [...state[title].questions, card]

            return {
                ...state,
                [title]: {
                    ...state[title],
                    questions
                }
            }
        default:
            return state
    }
}

export default decks