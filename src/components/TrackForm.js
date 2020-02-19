import React from 'react';
import { View, Stylesheet } from 'react-native';
import { TextInput } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TrackForm = () => {
  return (
    <View>
      <TextInput>Name For Track</TextInput>
      <TouchableOpacity>Record</TouchableOpacity>
    </View>
  );
};
