import React, {useState, useEffect} from 'react'
import { View, StyleSheet } from 'react-native'
import FabButton from '../components/atom/FabButton'
import WatchedList from '../components/atom/molecue/WatchedList'
import AddItemDialog from '../components/atom/AddItemDialog'
import getCollection from '../apicalls/getCollection'
import { useIsFocused } from '@react-navigation/native'

export default Books = ({navigation}) => {

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [books, setBooks] = useState([]);
    const [getElements, setGetElements] = useState(false);

    const onToggleGetElements = () => setGetElements(!getElements);
    const isFocused = useIsFocused()

    const OnClickAddHandler = () => {
        setShowAddDialog(true);
    }

    useEffect(() => {
        getCollection("books", true).then((r) => {
            setBooks(r)
        })
    }, [getElements,isFocused])

    return (
        <View style={styles.container}>
            <AddItemDialog  togleGetElements={onToggleGetElements} show={showAddDialog} hideDialog={setShowAddDialog}/>
            <WatchedList  togleGetElements={onToggleGetElements} icon="book" data={books}/>
            <FabButton OnClickHandler={OnClickAddHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})