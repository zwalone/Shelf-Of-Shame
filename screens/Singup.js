import React, {useState} from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import {Button, Avatar} from 'react-native-paper'
import FormInput from '../components/atom/FormInput'
import * as firebase from 'firebase'

export default Singup = ({route, navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const OnSingUpPress = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((u) => {
                var user = u.user;
                var result = firebase.firestore().collection("users").doc(user.uid)
                result.set({})
                result.collection("movies").doc("test").set({name: "test", desc: 'test', seen: true})
                result.collection("books").doc("test").set({name: "test", desc: 'test', seen: true})
                result.collection("games").doc("test").set({name: "test", desc: 'test', seen: true})
                    .catch((e) => {
                        console.log(e.message)
                    })
                setErrorMessage('');
                navigation.goBack();
            }).catch((e) =>{
                setErrorMessage(e.message);
            })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            style={{ flex: 1 }}
        >
        <View style={styles.container}>
            <View style={styles.textView}>
                <Avatar.Image size={160} source={require('../image/sos-logo.png')}/>
            </View>
            <View style={styles.fromView}>
                <FormInput label="Email" OnChangeInput={setEmail}/>
                <FormInput label="Password" OnChangeInput={setPassword}/>
                <FormInput label="Password Confirm" OnChangeInput={setPasswordConfirm}/>
            </View>
            <View style={styles.submitView}>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <Button mode='contained' onPress={() => OnSingUpPress()}>
                    Singup
                </Button>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        
    },
    textView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    fromView: {
        flex: 1,
        paddingTop: 30,
    },
    submitView: {
        flex: 1,
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',

    }
})