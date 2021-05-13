import React, {useState} from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, 
    TouchableWithoutFeedback, Keyboard, Platform   } from 'react-native'
import { Button, Avatar } from 'react-native-paper'
import FormInput from '../components/atom/FormInput'
import * as firebase from 'firebase'

export default Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const OnClickGoToSingUp = () =>{
        navigation.navigate('Singup', {
            screen: 'Singup',
        })
    }
    const OnClickGoToTabs = () =>{
        navigation.reset({
            index: 0,
            routes: [{
                name: "Shelf-Of-Shame",
            }]
        })
    }

    const OnLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                OnClickGoToTabs();
            }).catch((e) => {
                setErrorMessage(e.message);
            })
    }

    return (
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={{ flex: 1 }}
            >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <View style={styles.textView}>
                        <Avatar.Image size={160} source={require('../image/sos-logo.png')}/>
                    </View>
                    <View style={styles.formView}>
                        <FormInput label="Email" OnChangeInput={setEmail}/>
                        <FormInput label="Password" OnChangeInput={setPassword}/>
                        <Text>{errorMessage}</Text>
                        <Button mode='contained' onPress={() => {OnLoginPress()}}>Login</Button>
                    </View>
                    <View style={styles.singUpView}>
                        <Text style={styles.textSingUp}>U don't have account? </Text>
                        <Button mode="contained" onPress={() => OnClickGoToSingUp()}> Singup</Button>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 30,
        justifyContent: 'center',
    },
    textView: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    formView: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 40,
    },
    singUpView: {
        flex:1,
        justifyContent: 'center'
    },
    textSingUp:{
        fontSize: 16,
        fontStyle: 'italic',
        alignSelf: 'center',
        paddingBottom: 16,
    }

})