import React from "react";
import { ListItem, Icon, Button } from "@rneui/themed";

const BusinessItemsList = ({ item, onItemRemove }) => {
  return (
    <ListItem key={i} bottomDivider>
      <Icon name="local-offer" />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>
          From: {item.business} | {item.date}
        </ListItem.Subtitle>
      </ListItem.Content>
      <Button
        icon={{ name: "remove-circle-outline", color: "white" }}
        onPress={() => onItemRemove(item)}
      />
    </ListItem>
  );
};

export default BusinessItemsList;
