import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

export default FabButton = ({OnClickHandler}) => (
  <FAB
    style={styles.fab}
    small
    icon="plus"
    onPress={() => OnClickHandler()}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
