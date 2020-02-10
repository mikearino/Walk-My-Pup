//Helper component for styling different components.
import React from 'react';
import { View, StyleSheet } from 'react-native';

//pass in components as props or "children."
const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  }
});

export default Spacer;
