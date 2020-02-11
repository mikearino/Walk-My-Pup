import createDataContext from './createDataContext';

//This function only gets called by React directly
//dispatch function is called.
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//passing in dispatch
const signup = dispatch => {
  //This inner function is what is going to be called
  //the component.
  return ({ email, password }) => {
    //Make API request to sign up with email and password
    //If signed up then modify state and say we are authenticated.
    //If signing up fails reflect error somewhere.
  };
};

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
  { isSignedIn: false }
);
