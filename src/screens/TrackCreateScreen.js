import './_mockLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView } from 'react-navigation';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from 'expo-location';
const TrackCreateScreen = () => {
  //For displaying error to user
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      //Asks user for permission to track.
      await requestPermissionsAsync();
      //Watch users location and see it change over time
      await watchPositionAsync(
        {
          //How accurate do you want, be mindful of bat power.
          accuracy: Accuracy.BestForNavigation,
          //Updated every second
          timeInterval: 1000,
          //Or every ten meters
          distanceInterval: 10
        },
        location => {}
      );
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
