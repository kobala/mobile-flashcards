import { StyleSheet } from 'react-native'
import { black, white } from './colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: 280,
        height: 50,
        padding: 10,
        borderWidth: 1.5,
        borderColor: black,
        backgroundColor: white,
        margin: 24,
    },
    button: {
        backgroundColor: black,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 5,
        margin: 5
    },
    buttonText: {
        color: white,
        fontSize: 20,
        textAlign: 'center',
    }
});