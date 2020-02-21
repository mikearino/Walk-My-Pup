import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
//TrackContext is about saving + retrieving existing tracks
//from API
const TrackReducer = (state, action) => {
  switch (action.type) {
    case 'fetch_tracks':
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = await trackerApi.get('/tracks');
  dispatch({ type: 'fetch_tracks', payload: response.data });
};
const createTrack = dispatch => async (name, locations) => {
  //Make request to API
  await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
  TrackReducer,
  { fetchTracks, createTrack },
  []
);
