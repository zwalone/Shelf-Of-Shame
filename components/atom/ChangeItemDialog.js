import * as React from 'react';
import {useState}from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog, Portal, TextInput, Switch } from 'react-native-paper';

export default ChangeItemDialog = ({item, show, hideDialog}) => {

  const [textTitle, setTextTitle] = useState(item.title);
  const [textDesc, setTextDesc] = useState(item.description);
  const [isSwitchOnSeen, setIsSwitchSeen] = React.useState(item.watched);

  const onToggleSwitch = () => setIsSwitchSeen(!isSwitchOnSeen);

  const OnClickDeleteItem = (item) => {
    console.log("Delete item")
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
            <Button onPress={() => hideDialog(false)}>Delete</Button>
            <Button onPress={() => {OnClickDeleteItem(item); hideDialog(false)}}>Done</Button>
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