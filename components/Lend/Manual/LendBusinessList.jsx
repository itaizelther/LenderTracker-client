import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { ListItem, Icon } from "@rneui/themed";
import useAxios from "axios-hooks";

import eventBus from "../../../context/eventBus";

const LendBusinessList = ({ businessId, onSelectItem }) => {
  const [{ data: itemList = [] }, reloadItems] = useAxios({
    url: "/api/items",
    params: { ownerId: "null", groupId: businessId },
  });

  useEffect(() => eventBus.on("refresh", reloadItems), []);

  return (
    <ScrollView style={{ width: "100%", flex: 1 }}>
      {itemList.map((item, i) => (
        <ListItem key={i} bottomDivider onPress={() => onSelectItem(item)}>
          <Icon name="local-offer" />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: "bold" }}>
              {item.name}
            </ListItem.Title>
            <ListItem.Subtitle>ID: {item.id}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      ))}
    </ScrollView>
  );
};

export default LendBusinessList;
