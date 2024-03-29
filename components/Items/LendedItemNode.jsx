import React from "react";
import { ListItem, Icon, Button } from "@rneui/themed";

const LendedItemNode = ({ item, onItemRemove }) => {
  return (
    <ListItem bottomDivider>
      <Icon name="local-offer" />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "bold" }}>
          {item.name}
        </ListItem.Title>
        <ListItem.Subtitle>Lended from: {item.groupName}</ListItem.Subtitle>
        <ListItem.Subtitle>on {item.date}</ListItem.Subtitle>
      </ListItem.Content>
      <Button
        icon={{ name: "remove-circle-outline", color: "white" }}
        onPress={() => onItemRemove(item)}
      />
    </ListItem>
  );
};

export default LendedItemNode;
