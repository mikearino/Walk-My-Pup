import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

//This function only gets called by React directly
//dispatch function is called.
const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      //Take all properties out of state and add to
      //this new one. Overwite property to update
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    //Make API request to sign up with email and password
    //If signed up then modify state and say we are authenticated.
    //If signing up fails reflect error somewhere.
    try {
      //Call to Api passing in email and password and bind to response
      const response = await trackerApi.post('/signup', { email, password });
      console.log(response.data);
    } catch (err) {
      //Update state to add error.
      dispatch({
        type: 'add_error',
        payload: 'Somthing went wrong with sign up.'
      });
    }
  };
};

//Remember whenever dispatch is called React will automatically run
//Reducer.
const signin = dispatch => {
  return ({ email, password }) => {
    //Try to sign in.
    //Handle success by updating state
    //Handle failure by showing error message (somehow)
  };
};

const signout = dispatch => {
  return () => {
    //Somehow sign out.
  };
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  //If error message, print to user inside error message
  //property
  { isSignedIn: false, errorMessage: '' }
);
