import React from "react";
import { ListItem, Icon, Button } from "@rneui/themed";

const BusinessItemNode = ({ item, onShowQR }) => {
  const isAvailable = item.ownerId == null;

  return (
    <ListItem bottomDivider>
      <Icon name="local-offer" />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          {item.name}
        </ListItem.Title>
        <ListItem.Subtitle>
          {isAvailable ? "Available" : `Taken by ${item.ownerName}`}
        </ListItem.Subtitle>
        <ListItem.Subtitle>Last changed: {item.date}</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        icon={{ name: "qr-code", color: "white" }}
        onPress={() => onShowQR(item)}
      />
    </ListItem>
  );
};

export default BusinessItemNode;
