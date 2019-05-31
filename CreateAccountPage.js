import React from 'react'
import Container from'./components/container'
import Button from './components/button'
import {Text, TextInput, StyleSheet,View} from 'react-native'

const CreateAccountPage =function(props){
  return(
    <Container padding={50}>
      <Text>Create your account</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>First Name</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput style={styles.textInput}/>
      </View>
      <Button value='Continue'/>
    </Container>
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
export default CreateAccountPage
