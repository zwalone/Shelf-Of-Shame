import React from 'react'
import { ScrollView } from 'react-native'
import ItemList from '../ItemList'

export default WatchedList = ({data, icon, togleGetElements}) => {
    return (
        <ScrollView>
            {data.map((e,key) => {
                return <ItemList togleGetElements={togleGetElements} key={key} icon={icon} item={e}/>
            })}
        </ScrollView>
    )
}
