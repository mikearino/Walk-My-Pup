import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//One function that gets returned with dispatch to run
//another function.
const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => () => {};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation
  },
  { recording: false, locations: [], currentLocation: null }
);
