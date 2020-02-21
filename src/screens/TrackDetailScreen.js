import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  //This variable identify what element was just tapped on.
  const _id = navigation.getParam('_id');

  //.find returns the first truthy value and saves it into track.
  const track = state.find(t => t._id === _id);

  return <Text style={{ fontSize: 48 }}>{track.name}</Text>;
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
