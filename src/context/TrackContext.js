import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
//TrackContext is about saving + retrieving existing tracks
//from API
const TrackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => async (name, locations) => {
  //Make request to API
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  TrackReducer,
  { fetchTracks, createTrack },
  []
);
