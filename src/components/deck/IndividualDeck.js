import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { white, black, gray } from '../../styles/colors'
import commonStyles from '../../styles/common'

function IndividualDeckInfo({ title, questions }) {
    return (
        <View style={styles.header}>
            <Text style={{fontSize: 35}}>{title}</Text>
            <Text style={styles.cardsCount}>{questions.length} cards
            </Text>
        </View>
    )
}

class IndividualDeck extends Component {

    render() {
        const { title } = this.props.navigation.state.params

        const questions = this.props.decks[title] && this.props.decks[title].questions

        return (
            <View style={commonStyles.container}>
                <IndividualDeckInfo
                title={title}
                questions={questions}
                />

                <TouchableOpacity
                    style={[commonStyles.button, styles.buttonWithWhiteBg]}
                    onPress={() => {
                        this.props.navigation.navigate('NewCard', {
                            title,
                            questions,
                        })
                    }}>
                    <Text style={[commonStyles.buttonText, styles.buttonWithWhiteBgText]}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={commonStyles.button}
                    onPress={() => {
                        this.props.navigation.navigate('Quiz', {
                            title,
                            questions,
                        })
                    }}>
                    <Text style={commonStyles.buttonText}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWithWhiteBg: {
        backgroundColor: white,
        borderWidth: 1.5,
        borderColor: black,
        marginTop:60
    },
    buttonWithWhiteBgText: {
        color: black
    },
    cardsCount: {
        fontSize: 20,
        marginTop:15,
        color: gray
    }
});

function mapStateToProps(decks) {
    return { decks }
}

export default connect(mapStateToProps)(IndividualDeck)