import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context } from '../context/AuthContext';

const SigninScreen = () => {
  const { state, signin } = useContext(Context);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to your account."
        errorMessage={state.errorMessage}
        //onSubmit is going to call the function automatically
        //with the username and password object.
        onSubmit={signin}
        submitButtonText="Sign in"
      />
      <NavLink
        text="Don't have an account? Sign up instead"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;
