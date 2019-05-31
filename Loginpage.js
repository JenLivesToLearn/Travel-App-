import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Constants } from 'expo';
import Button from './components/button';
import Container from './components/container';
import FormInput from './components/formInput';
const loginPage = function loginPage() {
  return (
    <Container padding={50}>
      <FormInput label='Email'/>
      <FormInput label='Password'/>
      <Button value='Login'/>
    </Container>
  );
};
export default loginPage;
