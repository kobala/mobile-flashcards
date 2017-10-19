import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Finish from './Finish'

class Quiz extends Component {
    state = {
        currentCardIndex: 0,
        correctAnswersCount: 0,
        flipCard: false
    }

    onStatementPress = (statement) => {
        const currentCardIndex = this.state.currentCardIndex + 1

        let { correctAnswersCount } = this.state

        if(statement === 'correct'){
            correctAnswersCount++
        }

        this.setState({
            currentCardIndex,
            correctAnswersCount,
            flipCard: false
        })
    }

    onFlipCard = () => this.setState(state => ({flipCard: !state.flipCard}))

    resetQuiz = () => {
        this.setState({
            currentCardIndex: 0,
            correctAnswersCount: 0,
            flipCard: false
        })
    }

    toDeck = () => {
        this.props.navigation.goBack()
    }

    render() {
        const { questions } = this.props.navigation.state.params

        const { currentCardIndex, correctAnswersCount, flipCard } = this.state

        const unansweredQuestionsCount = questions.length - currentCardIndex

        const isQuizFinished = currentCardIndex === questions.length

        return (
            <View>

                {isQuizFinished ? (
                    <Finish
                        questions={questions}
                        correctAnswersCount={correctAnswersCount}
                        resetQuiz={this.resetQuiz}
                        toDeck={this.toDeck}
                    />
                ) : (
                    <View style={styles.container}>

                        <View>
                            <View>
                                <Text>{unansweredQuestionsCount} / {questions.length}</Text>
                            </View>
                        </View>

                        {flipCard ? (
                            <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 30}}>{questions[currentCardIndex].answer}</Text>

                                <TouchableOpacity onPress={() => this.onFlipCard()}>
                                    <Text>Question</Text>
                                </TouchableOpacity>

                            </View>) : (
                            <View style={{alignItems: 'center'}}>
                                <Text style={{fontSize: 30}}>{questions[currentCardIndex].question}</Text>

                                <TouchableOpacity onPress={() => this.onFlipCard()}>
                                    <Text>Answer</Text>
                                </TouchableOpacity>

                            </View>
                        )}

                        <View>
                            <View>
                                <TouchableOpacity onPress={() => this.onStatementPress('correct')}>
                                    <Text>Correct</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.onStatementPress('incorrect')}>
                                    <Text>Incorrect</Text>
                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>
                )}

            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Quiz