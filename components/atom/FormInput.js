import React, {useState} from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-paper';

export default FormInput = ({OnChangeInput, label}) => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput 
                label={label}
                value={text}
                onChangeText={text => {setText(text), OnChangeInput(text) }}
                secureTextEntry={label === "Password" || label === "Password Confirm" ? true : false}
            />
        </View>
    )
}
