import React from 'react'
import Container from'./components/container'
import Button from './components/button'
import {Text, TextInput, StyleSheet,View} from 'react-native'
import FormInput from './components/formInput'
const CreateAccountPage =function(props){
  return(
    <Container padding={50}>
      <Text>Create your account</Text>
      <FormInput label='Email'/>
      <FormInput label='Password'/>
      <FormInput label='First Name'/>
      <FormInput label='Last Name'/>
      <Button value='Continue'/>
    </Container>
  )
}

export default CreateAccountPage
