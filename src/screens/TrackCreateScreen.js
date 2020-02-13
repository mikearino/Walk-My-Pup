import '../_mockLocation';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView } from 'react-navigation';
//Asks user for permission to track.
import { requestPermissionsAsync } from 'expo-location';
const TrackCreateScreen = () => {
  //For displaying error to user
  const [err, setErr] = useState(null);
  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
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
