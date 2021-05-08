import React, {useState} from 'react'
import AppBar from '../components/atom/AppBar'
import { View, Text, StyleSheet } from 'react-native'
import FabButton from '../components/atom/FabButton'
import WatchedList from '../components/atom/molecue/WatchedList'
import Json from '../mockedJson'
import AddItemDialog from '../components/atom/AddItemDialog'

export default GamesWatched = ({route, navigation}) => {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const OnClickAddHandler = () => {
        setShowAddDialog(true);
    }
    const OnClickItemHandler = (item) => {
        console.log("Clicek item")
    }
    const OnClickChangeHandler = ({item}) => {
        console.log(`Change ${item}`)
    }


    return (
        <View>
            <AddItemDialog show={showAddDialog} hideDialog={setShowAddDialog}/>
            <WatchedList data={Json} OnItemClick={OnClickItemHandler}/>
            <FabButton OnClickHandler={OnClickAddHandler}/>
        </View>
    )
}