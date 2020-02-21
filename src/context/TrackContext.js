import createDataContext from './createDataContext';

//TrackContext is about saving + retrieving existing tracks
//from API
const TrackReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const fetchTracks = dispatch => () => {};
const createTrack = dispatch => (name, locations) => {
  //Make request to API
  console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
  TrackReducer,
  { fetchTracks, createTrack },
  []
);
