//Location brings a ton of different functions, by
//using star, it represents a ton of different functions.
import * as Location from 'expo-location';

//Represents ten meters in longitude or latitude
const tenMetersWithDegrees = 0.0001;

//Fake location reading
const getLocation = increment => {
  return {
    timestamp: 100000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -122.679565 + increment * tenMetersWithDegrees,
      latitude: 45.512794 + increment * tenMetersWithDegrees
    }
  };
};

//Tricking expo into thinking user is moving
let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter)
  });
  counter++;
}, 1000);
