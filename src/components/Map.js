import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
//Polyline can be shown inside of MapView.
import MapView, { Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext);
  //If the current location is not yet available, show a spinner.
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ martginTop 200 }}/>
  }

  return (
    //Map has to have at least a height to show up.
    <MapView
      style={styles.map}
      //What to show when map is rendered.
      initialRegion={{
        //What location.
        ...currentLocation.coords,
        //Zoom level
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      //Prop to track the user around.
      region={{}}
    ></MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
