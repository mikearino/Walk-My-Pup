import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter Name of Walk" />
      </Spacer>
      <Spacer>
        <Button title="Start Recording" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 300,
    margin: 40
  }
});

export default TrackForm;
