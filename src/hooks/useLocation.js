import { useState, useEffect } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

//This is a custom hook. Calling it isFocused doesn't really make a lot
//of sense, so instead the first argument will be called shouldTrack. Either
//True- start tracking else- don't track.
export default (shouldTrack, callback) => {
  //For displaying error to user
  const [err, setErr] = useState(null);
  //When hook runs for the very first time, it's saying we don't have a subscriber
  //whatsoever, it doesn't exist because it's not watching
  const [subscriber, setSubscriber] = useState(null);
  const startWatching = async () => {
    try {
      //Asks user for permission to track.
      await requestPermissionsAsync();
      //Watch users location and see it change over time.
      //Subscriber has a function called remove which will
      //make sure to stop tracking the users location.
      const sub = await watchPositionAsync(
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
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };
  //By putting a value inside of the array, you are telling a react
  //to run this function more than once the first time the component
  //rendered to the screen. If the value of should track changes, then
  //react will run startWatching again.
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
  }, [shouldTrack, callback]);
  //returns  array with error inside for track create screen.
  //It's convention for hooks to return inside of an array.
  return [err];
};
