import React from "react";
import { ScrollView } from "react-native";
import { ListItem, Icon } from "@rneui/themed";

const LendBusinessList = () => {
  const list = [
    {
      title: "Appointments",
      icon: "av-timer",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
    {
      title: "Trips",
      icon: "flight-takeoff",
    },
  ];

  return (
    <ScrollView style={{ width: "100%" }}>
      {list.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name={item.icon} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default LendBusinessList;
