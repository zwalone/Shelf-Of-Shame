import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import AppBar from '../components/atom/AppBar'
import FormInput from '../components/atom/FormInput'

export default Login = ({route, navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const OnClickGoToSingUp = () =>{
        navigation.navigate('Singup', {
            screen: 'Singup',
        })
    }
    const OnClickGoToTabs = () =>{
        navigation.navigate('MainTabs', {
            screen: 'MainTabScreen',
        })
    }

    return (
        <View>
            {/* <AppBar title={"Login"} /> */}
            <View>
                <FormInput label="Email" OnChangeInput={setEmail}/>
                <FormInput label="Password" OnChangeInput={setPassword}/>
                <Button mode='contained' onPress={() => {
                    OnClickGoToTabs();
                    console.log('TODO: Firebasse Login')}}>Login</Button>
            </View>

            <View>
                <Text>U don't have account? </Text>
                <Button mode="contained" onPress={() => OnClickGoToSingUp()}> Singup</Button>
            </View>
        </View>
    )
}
