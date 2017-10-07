import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import { createStore } from 'redux'
import { StackNavigator, TabNavigator } from 'react-navigation'
import reducer from './reducers/index'
import DeckList from './components/deck/DeckList'
import NewDeck from './components/deck/NewDeck'


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