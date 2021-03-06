import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as deckActions from '../../actions/index'
import { addCardToDeck } from '../../utils/api'
import commonStyles from '../../styles/common'

class NewDeck extends Component {
    state = {
        question: '',
        answer: ''
    }

    _validate = (question, answer) => {
        if (question === '') {
            Alert.alert('Validation Error!', 'Question field is required')

            return false
        }

        if (answer === '') {
            Alert.alert('Validation Error!', 'Question field is required')

            return false
        }


        return true
    }

    addNewCard = () => {
        const card = this.state

        if(!this._validate(card.question, card.answer)){
            return
        }

        const { title } = this.props.navigation.state.params

        this.props.actions.addCardToDeck(title, card)

        addCardToDeck({
            card,
            title
        })

        Alert.alert('Success', 'Card Added Successfully', [
            {
                text: 'OK',
                onPress: () => this.props.navigation.goBack()
            }
        ])
    }

    render() {
        const { question, answer } = this.state

        return (
            <View style={commonStyles.container}>
                <Text>Enter Question</Text>
                <TextInput
                    style={commonStyles.input}
                    defaultValue="Question"
                    value={question}
                    onChangeText={question => this.setState({question})}/>
                <Text>Enter Answer</Text>
                <TextInput
                    style={commonStyles.input}
                    defaultValue="Answer"
                    value={answer}
                    onChangeText={answer => this.setState({answer})}/>

                <TouchableOpacity
                    style={commonStyles.button}
                    onPress={this.addNewCard}>
                    <Text style={commonStyles.buttonText}>Submit</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(deckActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(NewDeck)