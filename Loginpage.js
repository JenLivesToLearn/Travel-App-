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
const loginPage = function loginPage() {
  return (
    <Container padding={50}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>

        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}> Password:</Text>
        <TextInput secureTextEntry={true} style={styles.textInput} />
      </View>
      <Button />
    </Container>
  );
};
const styles = StyleSheet.create({
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 2,
  },
  inputContainer: {
    flexDirection: 'row',
  },

  label: {
    flex: 1,
  },
});

export default loginPage;
