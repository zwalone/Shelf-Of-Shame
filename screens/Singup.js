import React, {useState} from 'react'
import { View, Text } from 'react-native'
import {Button} from 'react-native-paper'
import AppBar from '../components/atom/AppBar'
import FormInput from '../components/atom/FormInput'

export default Singup = ({route, navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const OnClickGoBack = () => {
        navigation.goBack()
    }

    return (
        <View>
            <AppBar title={'Singup'} goback={OnClickGoBack}/>
            <View>
                <FormInput label="Email" OnChangeInput={setEmail}/>
                <FormInput label="Password" OnChangeInput={setPassword}/>
                <FormInput label="Password Confirm" OnChangeInput={setPasswordConfirm}/>
                <Button mode='contained' onPress={() => console.log("TODO: check input and create account and go back")}>
                    Singup
                </Button>
            </View>
        </View>
    )
}
