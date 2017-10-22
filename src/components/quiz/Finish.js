import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import commonStyles from '../../styles/common'

function Finish({questions, correctAnswersCount, resetQuiz, toDeck}) {
    getGrade = (questionsCount, correctAnswers) => (correctAnswers / questionsCount * 100).toFixed(2)

    return (
        <View>
            <Text>Total questions: {questions.length}</Text>
            <Text>Correct Answers: {correctAnswersCount}</Text>
            <Text>Incorrect Answers: {questions.length - correctAnswersCount}</Text>
            <Text>Percentage correct once: { this.getGrade(questions.length, correctAnswersCount) } %</Text>
            <View>
                <View>
                    <TouchableOpacity
                        style={commonStyles.button}
                        onPress={resetQuiz}
                    >
                        <Text style={commonStyles.buttonText}>Reset Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={commonStyles.button}
                        onPress={toDeck}
                    >
                        <Text style={commonStyles.buttonText}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Finish