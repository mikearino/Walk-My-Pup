import createDataContext from './createDataContext';

//This function only gets called by React directly
//dispatch function is called.
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
