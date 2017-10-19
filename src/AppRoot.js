import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View, Platform } from 'react-native'
import { createStore } from 'redux'
import { StackNavigator, TabNavigator } from 'react-navigation'
import reducer from './reducers/index'
import DeckList from './components/deck/DeckList'
import NewDeck from './components/deck/NewDeck'
import IndividualDeck from './components/deck/IndividualDeck'
import NewCard from './components/card/NewCard'
import Quiz from './components/quiz/Quiz'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { white, black, yellow, gray } from './utils/colors'

const Tabs = TabNavigator({
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: Platform.OS === 'ios' && (() => <Ionicons name='ios-list' size={30} color={black} />),
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: Platform.OS === 'ios' && (() => <Ionicons name='ios-add' size={30} color={black} />)
            },
        }
    },
    {
        animationEnabled: true,
        tabBarOptions: {
            inactiveTintColor: black,
            activeTintColor: yellow,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: white,
            }
        }
    }
)

const AppNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            title: 'Home',
            headerStyle: {
                backgroundColor: black
            },
            headerTintColor: white
        },
    },
    IndividualDeck: {
        screen: IndividualDeck,
        navigationOptions: {
            headerStyle: {
                backgroundColor: black
            },
            headerTintColor: white
        }
    },
    NewCard: {
        screen: NewCard,
        navigationOptions: {
            title: 'Add Card',
            headerStyle: {
                backgroundColor: black
            },
            headerTintColor: white
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            title: 'Quiz',
            headerStyle: {
                backgroundColor: black
            },
            headerTintColor: white
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