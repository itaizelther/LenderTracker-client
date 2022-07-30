import React from "react";
import { ListItem, Icon, Button } from "@rneui/themed";

const BusinessItemNode = ({ item }) => {
  return (
    <ListItem bottomDivider>
      <Icon name="local-offer" />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>
          Lended by: {item.business} | {item.date}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default BusinessItemNode;
