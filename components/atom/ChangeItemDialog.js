import * as React from 'react';
import {useState}from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog, Portal, TextInput, Switch } from 'react-native-paper';
import { deleteDocument } from '../../apicalls/deleteDocument'
import { updateDocument } from '../../apicalls/updateDocument'

export default ChangeItemDialog = ({togleGetElements ,item, show, hideDialog}) => {

  const [textTitle, setTextTitle] = useState(item.name);
  const [textDesc, setTextDesc] = useState(item.desc);
  const [isSwitchOnSeen, setIsSwitchSeen] = React.useState(item.seen);

  const onToggleSwitch = () => setIsSwitchSeen(!isSwitchOnSeen);

  const OnClickDeleteItem = async (item) => {
    await deleteDocument(item)
    togleGetElements()
  }

  const OnClickUpdateItem = async () => {
    console.log(`UpdateItem ${{name: textTitle, desc: textDesc, seen: isSwitchOnSeen}}`)
    await updateDocument({id: item.id, type: item.type, name: textTitle, desc: textDesc, seen: isSwitchOnSeen})
    togleGetElements()
  }

  return (
    <View>
      <Portal>
        <Dialog visible={show} onDismiss={() => hideDialog(false)}>
          <Dialog.Title>Update Item</Dialog.Title>
          <Dialog.Content>
            {/* {Title} */}
            <TextInput
                label="Title"
                value={textTitle}
                onChangeText={text => setTextTitle(text)}
                />
            {/* {Description} */}
            <TextInput
                multiline={true}
                label="Description"
                value={textDesc}
                onChangeText={text => setTextDesc(text)}
                />
            {/* {Switch} */}
            <View style={styles.switchView}>
                <Paragraph>{isSwitchOnSeen ? `Seen`: `Unseen`}</Paragraph>
                <Switch value={isSwitchOnSeen} onValueChange={onToggleSwitch} />
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => {OnClickDeleteItem(item); hideDialog(false)}}>Delete</Button>
            <Button onPress={() => {OnClickUpdateItem(); hideDialog(false)}}>Update</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
    switchView: {
        display: 'flex',
    },
    dialogParagraph:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})