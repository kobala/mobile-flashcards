import React, { Component } from 'react'
import { View, StyleSheet, Text, Dimensions } from 'react-native'
import { white, gray } from '../../styles/colors'

class DeckInfo extends Component {
    render() {
        const { title, questions } = this.props

        return (
            <View style={styles.deckFrame}>
                <View style={styles.deckInside}>
                    <Text style={{ fontSize: 25 }}>{title}</Text>
                    <Text style={{ fontSize: 15, color: '#666666' }}>{questions.length} cards</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckFrame: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: white,
        height: 115,
        width: Dimensions.get('window').width,
        borderBottomColor: gray,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    deckInside: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default DeckInfo