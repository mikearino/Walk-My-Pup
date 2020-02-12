import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
//react-native-elements is a library with built up components
import { Text, Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      {/* Children of spacer has styling. */}
      <Spacer>
        <Text h3>headerText</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        {/* Passing in email and password to sign up which is de-structured from 
        AuthContext, which in turn will run the reducer. */}
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
});

export default AuthForm;
