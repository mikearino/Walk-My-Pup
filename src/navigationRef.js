import { NavigationActions } from 'react-navigation';

let navigator;

//Take navigation from react navigator and assign it
// to navigator with navigator = nav
export const setNavigator = nav => {
  navigator = nav;
};
// Route name is ex: TrackList: TrackListScreen,
// then the params are props that we want to pass in,
// ie information passed in that is to be shown.
export const navigate = (routeName, params) => {
  //Essentially by dispatching an action, we are telling
  //React Navigation that we want to change it's state and
  //Show a different screen to our user.
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
