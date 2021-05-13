import * as React from 'react';
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { List } from 'react-native-paper';
import ChangeItemDialog from '../atom/ChangeItemDialog'
import { Ionicons } from '@expo/vector-icons';

export default ItemList = ({item,icon, togleGetElements}) => {

    const [showDialog, setShowDialog] = useState(false);

    return(
        <TouchableOpacity onPress={() => setShowDialog(true)}> 
            <ChangeItemDialog togleGetElements={togleGetElements} item={item} show={showDialog} hideDialog={setShowDialog} />
            <List.Item 
                title={item.name}
                description={item.desc}
                left={props => <Ionicons style={{padding: 20}} name={icon} size={24} color="black" />
            }
            />
        </TouchableOpacity>
    )
};
