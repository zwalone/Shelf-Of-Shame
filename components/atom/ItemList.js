import * as React from 'react';
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { List } from 'react-native-paper';
import ChangeItemDialog from '../atom/ChangeItemDialog'

export default ItemList = ({item, OnItemClick}) => {

    const [showDialog, setShowDialog] = useState(false);

    return(
        <TouchableOpacity onPress={() => {OnItemClick(item); setShowDialog(true)}}> 
            <ChangeItemDialog item={item} show={showDialog} hideDialog={setShowDialog} />
            <List.Item
                title={item.title}
                description={item.description}
                left={props => <List.Icon {...props} icon="folder" />}
            />
        </TouchableOpacity>
    )
};