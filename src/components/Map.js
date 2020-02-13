import React from 'react';
import { Text, StyleSheet } from 'react-native';
//Polyline can be shown inside of MapView.
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 200; i++) {
    if (i % 2 === 0) {
      points.push({
        latitude: 45.512794 + i * 0.0001,
        longitude: -122.679565 + i * 0.0001
      });
    } else {
      points.push({
        latitude: 45.512794 - i * 0.0002,
        longitude: -122.679565 - i * 0.0004
      });
    }
  }

  return (
    //Map has to have at least a height to show up.
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
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
