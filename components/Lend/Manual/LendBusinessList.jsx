import React from "react";
import { ScrollView } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import useAxios from "axios-hooks";

const LendBusinessList = ({ businessId, onSelectItem }) => {
  const [{ data: itemList = [] }] = useAxios({
    url: "/api/items",
    params: { groupId: businessId },
  });

  return (
    <ScrollView style={{ width: "100%" }}>
      {itemList.map((item, i) => (
        <ListItem key={i} bottomDivider onPress={() => onSelectItem(item)}>
          <Icon name="local-offer" />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>ID: {item.id}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default LendBusinessList;
