import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import FabButton from '../components/atom/FabButton'
import WatchedList from '../components/atom/molecue/WatchedList'
import AddItemDialog from '../components/atom/AddItemDialog'
import getCollection from '../apicalls/getCollection'
import { useIsFocused } from '@react-navigation/native'

export default FilmsWatched = ({navigation}) => {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [films , setFilms] = useState([])
    const [getElements, setGetElements] = useState(false);

    const onToggleGetElements = () => setGetElements(!getElements);
    const isFocused = useIsFocused()

    const OnClickAddHandler = () => {
        setShowAddDialog(true);
    }

    useEffect(() => {
        getCollection("movies", false).then((r) => {
            setFilms(r)
        })
    }, [getElements,isFocused])

    return (
        <View style={styles.container}>
            <AddItemDialog togleGetElements={onToggleGetElements} show={showAddDialog} hideDialog={setShowAddDialog}/>
            <WatchedList togleGetElements={onToggleGetElements} icon="film-outline" data={films}/>
            <FabButton OnClickHandler={OnClickAddHandler}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})