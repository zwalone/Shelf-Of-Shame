import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export default FabButton = ({OnClickHandler}) => (
  <FAB
    style={styles.fab}
    normal
    icon="plus"
    onPress={() => OnClickHandler()}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    marginRight: 26,
    marginBottom: 30,
    right: 0,
    bottom: 0,
  },
})
