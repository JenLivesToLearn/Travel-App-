import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FormInput= function(props){
  return(
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={styles.textInput}/>
    </View>
  )

}
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
export default FormInput;
