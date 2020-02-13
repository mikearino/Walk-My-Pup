import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  //Map has to have at least a height to show up.
  return <MapView style={styles.map} 
  //What to show when map is rendered.
  initialRegion={{
    //What location.
    latitude:
    longitude:
    //Zoom level
    latitudeDelta:
    longitudeDelta:
  }}
  />;
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
