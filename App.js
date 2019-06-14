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
import CategoryPage from './CategoryPage';
import CreateAccountPage from'./CreateAccountPage';
import Button from './components/button';
import CalendarPage from './Calendar';
class App extends React.Component {
  render() {
    return (
      <Container>
        <Octicons name="globe" size={64} />
        <Text style={styles.heading}>Welcome!</Text>
        <Button value='Login'/>
        <View style={styles.row}>
        <Text>Don't have an account?</Text><Button value='Sign up' isLink={true}/>
        </View>
      </Container>
    );
  }
}
export default CalendarPage;
const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
  },

  row: {
    flexDirection:'row',
  }

});
