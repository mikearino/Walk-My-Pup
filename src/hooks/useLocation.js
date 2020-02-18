import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

//This is a custom hook.
export default callback => {
  //For displaying error to user
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    try {
      //Asks user for permission to track.
      await requestPermissionsAsync();
      //Watch users location and see it change over time.
      //Subscriber has a function called remove which will
      //make sure to stop tracking the users location.
      const subscriber = await watchPositionAsync(
        {
          //How accurate do you want, be mindful of bat power.
          accuracy: Accuracy.BestForNavigation,
          //Updated every second
          timeInterval: 1000,
          //Or every ten meters
          distanceInterval: 10
        },
        //Callback gets invoked every single time a user changes
        //location.
        callback
      );
    } catch (e) {
      setErr(e);
    }
  };
  useEffect(() => {
    startWatching();
  }, []);
  //returns  array with error inside for track create screen.
  //It's convention for hooks to return inside of an array.
  return [err];
};
