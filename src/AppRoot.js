import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class AppRoot extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Ready to start!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})