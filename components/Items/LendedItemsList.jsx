import React from "react";
import { ScrollView } from "react-native";
import { ListItem, Icon, Button } from "@rneui/themed";

const LendedItemsList = ({ items }) => {
  return (
    <ScrollView style={{ width: "100%" }}>
      {items.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <Icon name="local-offer" />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>
              From: {item.business} | {item.date}
            </ListItem.Subtitle>
          </ListItem.Content>
          <Button icon={{ name: "remove-circle-outline", color: "white" }} />
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default LendedItemsList;
