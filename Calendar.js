import React from 'react';
import {Agenda} from 'react-native-calendars';
import {View,Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  CardText:{paddingVertical: 5, paddingRight:100}
})
const mockData = {
  '2019-06-13': [
    {
      id:'1',
      departure: {airport:'FLL', time:'08:30'},
      arrival:{airport:'LAX', time:'12:00'},
      layoverId: '2'
    },
    {
      id:'2',
      departure: {airport:'LAX', time:'13:00'},
      arrival:{airport: 'BKK', time:'08:30'},
      layoverId:null
    }
  ]
}
const CardText = function (props){
  return (
    <Text style={styles.CardText}>
    {props.children}
    </Text>
  )
}
const renderItem = function(item){
  return (
    <Card>
    <View style={styles.row}>
    <CardText>
    {item.departure.airport}
    </CardText>
    <CardText>
    {item.departure.time}
    </CardText>
    </View>
    <View style={styles.row}>
    <CardText>
    {item.arrival.airport}
    </CardText>
    <CardText>
    {item.arrival.time}
    </CardText>
    </View>
    <View style={styles.row}>
    <CardText>
    {item.layoverId && 'Layover'}
    </CardText>
    </View>

    </Card>
  )

}
const rowHasChanged = function(r1,r2){
  return (
    r1.id !== r2.id
  )
}
const CalendarPage = function(props){
  return (
  <Agenda rowHasChanged={rowHasChanged} renderItem={renderItem} items={mockData} selected={'2019-06-13'}/>
)}

export default CalendarPage;
