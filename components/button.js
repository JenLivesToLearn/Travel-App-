import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const button = function button() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    borderRadius: 20,
    padding: 20,
  },

  buttonText: {
    fontSize: 25,
  },
});

export default button;
