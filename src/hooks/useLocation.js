import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

//This is a custom hook.
export default () => {
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
        //Callback gets invoked every single time a user changes
        //location with location object.
        location => {
          addLocation(location);
        }
      );
    } catch (e) {
      setErr(e);
    }
  };
};
