import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Finish({questions, correctAnswersCount, resetQuiz, toDeck}) {
    getGrade = (questionsCount, correctAnswers) => (correctAnswers / questionsCount * 100).toFixed(2)

    return (
        <View>
            <Text>Total questions: {questions.length}</Text>
            <Text>Correct Answers: {correctAnswersCount}</Text>
            <Text>Incorrect Answers: {questions.length - correctAnswersCount}</Text>
            <Text>Percentage correct once: { this.getGrade(questions.length, correctAnswersCount) } %</Text>
            <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 2}}>
                <View>
                    <TouchableOpacity onPress={resetQuiz}>
                        <Text style={{
                            justifyContent: 'center',
                            textAlign: 'center',
                            width: 100,
                            height: 40
                        }}>Reset Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toDeck}>
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
    )
}

export default Finish