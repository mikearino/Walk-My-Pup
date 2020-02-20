import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      //Update state, with new currentLocation object value of
      //action.payload
      return { ...state, currentLocation: action.payload };
    case 'start_recording':
      // Update recording flag to true.
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    case 'add_location':
      //Take all of the present locations and throw them
      //into a new array. Then add a new action payload as well.
      return { ...state, locations: [...state.locations, action.payload] };
    case 'change_name':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

//One function that gets returned with dispatch to run
//another function.
//Receives whatever the name has been updated to.
const changeName = dispatch => name => {
  dispatch({ type: 'change_name', payload: name });
};
const startRecording = dispatch => () => {
  dispatch({ type: 'start_recording' });
};
const stopRecording = dispatch => () => {
  dispatch({ type: 'stop_recording' });
};
const addLocation = dispatch => (location, recording) => {
  //Dispatch current location from TrackCreateScreen's location
  //callback.
  dispatch({ type: 'add_current_location', payload: location });
  if (recording) {
    dispatch({ type: 'add_location', payload: location });
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  {
    startRecording,
    stopRecording,
    addLocation,
    changeName
  },
  { name: '', recording: false, locations: [], currentLocation: null }
);
