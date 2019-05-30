import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const button = function button(props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{props.value}</Text>
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
