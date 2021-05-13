import React, {useState, useEffect} from 'react'
import AppBar from '../components/atom/AppBar'
import { View, Text, StyleSheet } from 'react-native'
import FabButton from '../components/atom/FabButton'
import WatchedList from '../components/atom/molecue/WatchedList'
import Json from '../mockedJson'
import AddItemDialog from '../components/atom/AddItemDialog'
import getCollection from '../apicalls/getCollection'


export default FilmsWatched = ({route, navigation}) => {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [films , setFilms] = useState([])
    const [getElements, setGetElements] = useState(false);

    const onToggleGetElements = () => setGetElements(!getElements);

    const OnClickAddHandler = () => {
        setShowAddDialog(true);
    }
    const OnClickItemHandler = (item) => {
        console.log("Clicek item")
    }
    const OnClickChangeHandler = ({item}) => {
        console.log(`Change ${item}`)
    }

    useEffect(() => {
        getCollection("movies", false).then((r) => {
            setFilms(r)
        })
    }, [getElements])

    return (
        <View style={styles.container}>
            <AddItemDialog togleGetElements={onToggleGetElements} show={showAddDialog} hideDialog={setShowAddDialog}/>
            <WatchedList togleGetElements={onToggleGetElements} icon="film-outline" data={films} OnItemClick={OnClickItemHandler}/>
            <FabButton OnClickHandler={OnClickAddHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})