import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {List} from 'react-native-paper'
import ItemList from '../ItemList'

export default WatchedList = ({data, icon, OnItemClick, togleGetElements}) => {
    return (
        <ScrollView>
            {data.map((e,key) => {
                return <ItemList togleGetElements={togleGetElements} key={key} icon={icon} item={e} OnItemClick={OnItemClick}/>
            })}
        </ScrollView>
    )
}
