import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {Button} from 'react-native-paper'
import FormInput from '../components/atom/FormInput'
import * as firebase from 'firebase'

export default Singup = ({route, navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [singedup, setSingedup] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const OnClickGoBack = () => {
        navigation.goBack()
    }

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
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text>Sing Up my friend to create a account</Text>
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        
    },
    textView: {
        flex: 0.1,
        justifyContent: 'center',
        // backgroundColor: 'yellow',
    },
    fromView: {
        flex: 1,
        justifyContent: 'space-around',
        paddingTop: 30,
        // backgroundColor: 'green',
    },
    submitView: {
        flex: 1,
        justifyContent: 'space-around',
        // backgroundColor: 'red',
    },
    errorMessage: {
        color: 'red',
        fontSize: 16,
        textAlign: 'center',

    }
})