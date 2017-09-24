import { combineReducers } from 'redux'
import decks from './deckReducer'
import cards from './cardReducer'

const rootReducer = combineReducers({
    decks,
    cards
})

export default rootReducer