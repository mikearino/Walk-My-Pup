import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';
//Pull information from LocationContext. Pull action function out of
//TrackContext, then throw that information into the action function.
export default () => {
  //Pull off action function to track to eventually create a track on
  //API.
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
    reset
  } = useContext(LocationContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };
  //Call save track with whatever name you have and locations and
  //make a request to back end API. Essentially exposing a function that
  //any component can use to save a track. Community convention is to return
  //value inside of an array.
  return [saveTrack];
};
