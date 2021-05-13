import * as React from 'react';
import {useState}from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog, Portal, TextInput, Switch , RadioButton} from 'react-native-paper';
import {addToCollection} from '../../apicalls/addToCollections'

export default AddItemDialog = ({show, hideDialog, togleGetElements}) => {

    const [textTitle, setTextTitle] = useState("");
    const [textDesc, setTextDesc] = useState("");
    const [checked, setChecked] = React.useState('first');
    const [isSwitchOnSeen, setIsSwitchSeen] = React.useState("");

    const onToggleSwitch = () => setIsSwitchSeen(!isSwitchOnSeen);

    const OnClickAdd = async ()  => {

      await addToCollection(checked, {name: textTitle, desc: textDesc,
         seen: isSwitchOnSeen})
          .then((e) => {console.log(e); togleGetElements()})

    }

  return (
    <View>
      <Portal>
        <Dialog visible={show} onDismiss={() => hideDialog(false)}>
          <Dialog.Title>Add Item</Dialog.Title>
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
                <Paragraph style={styles.seenText} >{isSwitchOnSeen ? `Seen`: `Unseen`}</Paragraph>
                <Switch style={styles.seenSwitch} label={isSwitchOnSeen ? `Seen`: `Unseen`} value={isSwitchOnSeen} onValueChange={onToggleSwitch} />
            </View>
            {/* {RadioButton} */}
            <View>
                <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                    <RadioButton.Item
                        label="Book"
                        value="books"
                    />
                    <RadioButton.Item
                        label="Film"
                        value="movies"
                    />
                    <RadioButton.Item
                        label="Game"
                        value="games"
                    />
                </RadioButton.Group>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(false)}>Cancel</Button>
            <Button onPress={() => {OnClickAdd(); hideDialog(false)}}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
    switchView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 16,
      marginBottom: 10,
    },
    dialogParagraph:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    seenText: {
      paddingLeft: 16,
      fontSize: 16,
    },
    seenSwitch: {
      marginRight: 16,
    }
})