import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from './components/button';
import Container from "./components/container";
const CategoryPage = function(props) {
  return(
    <Container>
      <Button value='Create My Itinerary'/>
      <Button value='Flight'/>
      <Button value="Hotels"/>
      <Button value="Resturants"/>
      <Button value="Activities"/>
      <Button value="Emergency"/>
     </Container>
  )

}
export default CategoryPage;
