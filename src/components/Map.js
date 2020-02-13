import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
  //Map has to have at least a height to show up.
  return (
    <MapView
      style={styles.map}
      //What to show when map is rendered.
      initialRegion={{
        //What location.
        latitude: 45.512794,
        longitude: -122.679565,
        //Zoom level
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    />
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
