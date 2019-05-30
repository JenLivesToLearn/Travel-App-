import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const button = function button(props) {
  return (
    <TouchableOpacity style={props.isLink ? styles.link : styles.button}>
      <Text style={styles.buttonText(props.isLink)}>{props.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 4,
    borderRadius: 20,
    padding: 20,
  },

  buttonText: (isLink) => {
    return {fontSize: isLink ? 14 : 25}

  },
  link: {
    borderBottomWidth: 1
  }
});

export default button;
