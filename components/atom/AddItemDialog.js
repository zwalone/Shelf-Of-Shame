import * as React from 'react';
import {useState}from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Paragraph, Dialog, Portal, TextInput, Switch , RadioButton} from 'react-native-paper';

export default AddItemDialog = ({show, hideDialog}) => {

    const [textTitle, setTextTitle] = useState("");
    const [textDesc, setTextDesc] = useState("");
    const [checked, setChecked] = React.useState('first');
    const [isSwitchOnSeen, setIsSwitchSeen] = React.useState("");

    const onToggleSwitch = () => setIsSwitchSeen(!isSwitchOnSeen);

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
                <Paragraph>{isSwitchOnSeen ? `Seen`: `Unseen`}</Paragraph>
                <Switch label={isSwitchOnSeen ? `Seen`: `Unseen`} value={isSwitchOnSeen} onValueChange={onToggleSwitch} />
            </View>
            {/* {RadioButton} */}
            <View>
                <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
                    <RadioButton.Item
                        label="Book"
                        value="Book"
                    />
                    <RadioButton.Item
                        label="Film"
                        value="Film"
                    />
                    <RadioButton.Item
                        label="Game"
                        value="Game"
                    />
                </RadioButton.Group>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(false)}>Cancel</Button>
            <Button onPress={() => hideDialog(false)}>Add</Button>
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