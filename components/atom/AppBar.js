import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

export default AppBar = ({icon, title, subtitle, goback}) => {

    const iconMode = icon === undefined ? false : true
    const gobackMode = goback === undefined ? false : true

    const goBackAction = gobackMode ? (
        <Appbar.BackAction onPress={() => goback()}/>
    ): null

    const iconItem = iconMode ? (
        <Appbar.Action icon={icon}/>
    ): null

    return (
        <Appbar.Header>
            {goBackAction}
            <Appbar.Content title={title} subtitle={subtitle} />
            {iconItem}
        </Appbar.Header>
    )
}
