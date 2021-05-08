import React, {useState} from 'react'
import { View, Text } from 'react-native'
import { TextInput, HelperText } from 'react-native-paper';

export default FormInput = ({OnChangeInput, label}) => {
    const [text, setText] = useState('');
    const hasError = () => {
        return !text.includes('@');
    }
    const HelperEmail = label === "Email" ? (
        <HelperText type="error" visible={hasError()}>
            Email address is invalid!
        </HelperText>
    ) : null


    return (
        <View>
            <TextInput 
                label={label}
                value={text}
                onChangeText={text => {setText(text), OnChangeInput(text) }}
                secureTextEntry={label === "Password" || label === "Password Confirm" ? true : false}
            />
            {/* {HelperEmail} */}
        </View>
    )
}
