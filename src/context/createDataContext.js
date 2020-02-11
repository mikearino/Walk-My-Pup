import React, { userReducer } from 'react';

//export a function that's going to be called with a reducer function,
//an action object and a default state
export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();
  //Provider is the pipeline to pass state around
  const Provider = ({ children }) => {
    //user reducer takes 2 args reducer, which is that case statement,
    //and then also defaultValue which is state
    const [state, dispatch] = userReducer(reducer, defaultValue);

    const boundActions = {};
    //Loop over all the actions passed in.
    //Actions is a object so use for in to loop over all
    //key value pairs.
    for (let key in actions) {
      //Look up each actions that are being passed in and dispatch.
      boundActions[key] = action[key](dispatch);
    }

    return (
      //Underlying component that makes data available to all
      //components rendered underneath it.
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
