import React, {Component} from 'react'
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native'
import firebase from 'firebase'
import {firebaseConfig} from "../settings";

export default class Loading extends Component {

    componentDidMount() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? 'Main' : 'SignUp')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})