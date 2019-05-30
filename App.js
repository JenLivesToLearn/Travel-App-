import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';
import Container from './components/container';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Octicons } from '@expo/vector-icons';
import Loginpage from './Loginpage';
import Button from './components/button';
class App extends React.Component {
  render() {
    return (
      <Container>
        <Octicons name="globe" size={64} />
        <Text style={styles.heading}>Welcome!</Text>
        <Button />
      </Container>
    );
  }
}
export default Loginpage;
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
  },
  

});
