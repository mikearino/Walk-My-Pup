import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      //Update state, with new currentLocation object value of
      //action.payload
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

//One function that gets returned with dispatch to run
//another function.
const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => location => {
  //Dispatch current location from TrackCreateScreen's location
  //callback.
  dispatch({ type: 'add_current_location', payload: location });
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation
  },
  { recording: false, locations: [], currentLocation: null }
);
