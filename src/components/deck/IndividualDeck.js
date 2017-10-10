import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

function IndividualDeckInfo({ title, questions }) {
    return (
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 35}}>{title}</Text>
            <Text style={{fontSize: 25, marginTop: 15}}>{questions.length} cards
            </Text>
        </View>
    )
}

class IndividualDeck extends Component {

    render() {
        const { title } = this.props.navigation.state.params

        const questions = this.props.decks[title] && this.props.decks[title].questions

        return (
            <View>
                <IndividualDeckInfo
                title={title}
                questions={questions}
                />

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('NewCard', {
                            title,
                            questions,
                        })
                    }}>
                    <Text>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('Quiz', {
                            title,
                            questions,
                        })
                    }}>
                    <Text>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return { decks }
}

export default connect(mapStateToProps)(IndividualDeck)