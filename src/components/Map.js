import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
//Polyline can be shown inside of MapView.
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);
  //If the current location is not yet available, show a spinner.
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    //Map has to have at least a height to show up.
    <MapView
      style={styles.map}
      //What to show when map is rendered.
      initialRegion={{
        //What location gets rendered when map first gets
        //shown on the screen.
        ...currentLocation.coords,
        //Zoom level
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      //Prop to track the user around and automatically
      //re-center itself as well.
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      <Circle
        //Exact lat/long to draw a circle on the map.
        center={currentLocation.coords}
        radius={30}
        //rgba is color with opacity to it.(border)
        strokeColor="rgba(158, 158, 255, 1.0)"
        //inner
        fillColor="rgba(158, 158, 255, 0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
