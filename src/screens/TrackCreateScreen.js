import './_mockLocation';
//useCallback is designed to solve the issue of infinite callbacks.
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import useLocation from '../hooks/useLocation';
import { Context as LocationContext } from '../context/LocationContext';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
      //Add list of dependencies or variables to watch. Anytime
      // a variable inside the array changes, rebuild that callback from
      //scratch.
    },
    [state.recording]
  );
  //Pass in callback function to be ran anytime there is a new
  //location. First argument is if true, start tracking, if
  //false, stop tracking altogether. 2nd arg is for any time the
  //users location changes.
  const [err] = useLocation(isFocused, callback);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a track</Text>
      <Map />
      {/* callback will be invoked any time a user tries to navigate 
      away from the screen */}

      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

//withNavigationFocus and isFocused, you receive a boolean of true or
//false.
export default withNavigationFocus(TrackCreateScreen);
