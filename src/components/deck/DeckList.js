import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getDecks } from '../../actions/index'
import { fetchDeckResults } from '../../utils/api'
import DeckInfo from './DeckInfo'

class DeckList extends Component {
    componentDidMount() {
        const { dispatch } = this.props

        fetchDeckResults().then(decks => dispatch(getDecks(decks)))
    }

    _renderDeck = ({item}) => {
        return (
            <View style={styles.deck}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('IndividualDeck', item)}>
                    <DeckInfo
                        title={item.title}
                        questions={item.questions}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    _keyExtractor = (item, index) => index

    render() {
        const decks = Object.values(this.props.decks)

        return (
            <View>
                <View style={styles.deck}>
                    <FlatList
                        data={decks}
                        renderItem={this._renderDeck}
                        keyExtractor={this._keyExtractor}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        flexDirection: 'row'
    }
})

function mapStateToProps(decks) {
    return { decks }
}

export default connect(mapStateToProps)(DeckList)