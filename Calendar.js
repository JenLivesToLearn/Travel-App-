import React from "react";
import { Agenda } from "react-native-calendars";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  CardText: { paddingVertical: 5, paddingRight: 100 }
});
const mockData = {
  "2019-06-13": [
    {
      id: "1",
      departure: { airport: "FLL", time: "08:30" },
      arrival: { airport: "LAX", time: "12:00" },
      layoverId: "2"
    },
    {
      id: "2",
      departure: { airport: "LAX", time: "13:00" },
      arrival: { airport: "BKK", time: "08:30" },
      layoverId: null
    },
    {
      id: "3",
      Hotel: {
        hotelName: "Treehouse Hotel",
        location: "Bangkok",
        checkin: "15:00"
      }
    },
    {
      id: "4",
      Activity: {
        activityName: "Elephant Sanctuary",
        activityLocation: "Thalang, Thiland",
        activityTime: "22:00"
      }
    }
  ]
};
const CardText = function(props) {
  return <Text style={styles.CardText}>{props.children}</Text>;
};
const FlightCard = function(props) {
  return (
    <Card>
      <View style={styles.row}>
        <CardText>{props.departureAirport}</CardText>
        <CardText>{props.departureTime}</CardText>
      </View>
      <View style={styles.row}>
        <CardText>{props.arrivalAirport}</CardText>
        <CardText>{props.arrivalTime}</CardText>
      </View>
      <View style={styles.row}>
        <CardText>{props.layoverId && "Layover"}</CardText>
      </View>
    </Card>
  );
};
const EventCard = function(props) {
  return (
    <Card>
      <CardText>{props.Name}</CardText>
      <CardText>{props.location}</CardText>
      <CardText>{props.time}</CardText>
    </Card>
  );
};
const rowHasChanged = function(r1, r2) {
  return r1.id !== r2.id;
};
const renderItem = function(item) {
  if (item.Hotel) {
    return (
      <EventCard
        Name={item.Hotel.hotelName}
        location={item.Hotel.location}
        time={item.Hotel.checkin}
      />
    );
  } else if (item.Activity) {
    return (
      <EventCard
        Name={item.Activity.activityName}
        location={item.Activity.activityLocation}
        time={item.Activity.activityTime}
      />
    );
  } else {
    return (
      <FlightCard
        departureAirport={item.departure.airport}
        departureTime={item.departure.time}
        arrivalAirport={item.arrival.airport}
        arrivalTime={item.arrival.time}
        layoverId={item.layoverId}
      />
    );
  }
};
const CalendarPage = function(props) {
  return (
    <Agenda
      rowHasChanged={rowHasChanged}
      renderItem={renderItem}
      items={mockData}
      selected={"2019-06-13"}
    />
  );
};

export default CalendarPage;
