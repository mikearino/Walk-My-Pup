import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

//WithNavigation is an alternative to passing props from
//StackNavigator
const NavLink = ({ navigation }) => {};

const styles = StyleSheet.create({});

export default withNavigation(NavLink);
