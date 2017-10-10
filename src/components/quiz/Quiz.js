import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Video from "expo/src/Video";

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

    getGrade = () => {
        const { questions } = this.props.navigation.state.params

        const { correctAnswersCount } = this.state

        return (correctAnswersCount / questions.length * 100).toFixed(2)
    }

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
                    <View>
                        <Text>Total questions: {questions.count}</Text>
                        <Text>Correct Answers: {correctAnswersCount}</Text>
                        <Text>Incorrect Answers: {questions.length - correctAnswersCount}</Text>
                        <Text>Percentage correct once: { this.getGrade() } %</Text>
                        <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                            <View style={styles.container}>

                                <TouchableOpacity onPress={() => this.resetQuiz()}>
                                    <Text style={{
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        width: 100,
                                        height: 40
                                    }}>Reset Quiz</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.toDeck()}>
                                    <Text style={{
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        marginTop: 30,
                                        width: 100,
                                        height: 40
                                    }}>Back to Deck</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ) : (
                    <View style={styles.container}>

                        <View>
                            <View>
                                <Text>{unansweredQuestionsCount} / {questions.length}</Text>
                            </View>
                        </View>

                        <View>
                            <View>
                                <View>
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
                                </View>
                            </View>
                        </View>

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