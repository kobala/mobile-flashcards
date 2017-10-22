import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { connect } from 'react-redux'
import  { bindActionCreators } from 'redux'
import * as deckActions from '../../actions/index'
import { createNewDeck } from '../../utils/api'
import commonStyles from '../../styles/common'


class NewDeck extends Component {
    state = {
        title: ''
    }

    _validate = (text) => {
        const { decks } = this.props

        if( !text ){
            Alert.alert(
                'Validation Error!',
                'The Deck Name field is required'
            )

            return false
        }else if(decks[text]){
            Alert.alert(
                'Error!',
                'Deck Already exists in list'
            )

            return false
        }

        return true
    }

    _onSuccessAlertPress = (title) => {
        this.props.navigation.navigate('IndividualDeck', {
            title,
            questions: []
        })
    }

    addDeck = () => {
        const { title } = this.state

        if(!this._validate(title)){
            return
        }

        const newDeck = {
            [title]: {
                title,
                questions: []
            }
        }

        this.props.actions.addDeck(newDeck)

        createNewDeck(newDeck)

        this.setState({title: ''})

        Alert.alert(
            'Success', 'Deck Created',
            [
                {
                    text: 'OK',
                    onPress: this._onSuccessAlertPress(title)
                }
            ]
        )
    }

    render() {
        return (
            <View style={commonStyles.container}>
                <Text style={{fontSize: 30}}>What is the title of your new deck?</Text>

                <TextInput
                    value={this.state.title}
                    style={commonStyles.input}
                    onChangeText={title => this.setState({title})} />

                <TouchableOpacity
                    style={commonStyles.button}
                    onPress={this.addDeck}>
                    <Text style={commonStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(decks) {
    return { decks }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(deckActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck)