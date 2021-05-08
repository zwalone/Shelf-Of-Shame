import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {List} from 'react-native-paper'
import ItemList from '../ItemList'

export default WatchedList = ({data, OnItemClick}) => {
    return (
        <ScrollView>
            {data.map((e,key) => {
                return <ItemList key={key} item={e} OnItemClick={OnItemClick}/>
            })}
        </ScrollView>
    )
}
