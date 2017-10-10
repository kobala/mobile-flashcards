import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { createStore } from 'redux'
import { StackNavigator, TabNavigator } from 'react-navigation'
import reducer from './reducers/index'
import DeckList from './components/deck/DeckList'
import NewDeck from './components/deck/NewDeck'
import IndividualDeck from './components/deck/IndividualDeck'
import NewCard from './components/card/NewCard'
import Quiz from './components/quiz/Quiz'


const Tabs = TabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks'
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck'
            },
        }
    }
)

const AppNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {title: 'Home'},
    },
    IndividualDeck: {
        screen: IndividualDeck,
        navigationOptions: {
            headerTintColor: '#7c7e80'
        }
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            title: 'Add Card',
            headerTintColor: '#7c7e80'
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerTintColor: '#7c7e80'
        }
    }
})

export default class AppRoot extends Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={{ flex: 1 }}>
                    <AppNavigator />
                </View>
            </Provider>
        )
    }
}