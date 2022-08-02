import React from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import useAxios from "axios-hooks";

import useStyles from "./businessStyles";
import FilterableList from "../Common/FilterableList";
import BusinessItemNode from "./BusinessItemNode";

const ItemsScreen = () => {
  const styles = useStyles();

  // TODO: not hardcoded
  const businessId = "mnqDZrE4hrW5aiCJ18i4";
  const [{ data: businessData = "" }] = useAxios(`/api/groups/${businessId}`);
  const [{ data: items = [] }] = useAxios({
    url: "/api/items",
    params: { groupId: businessId },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{businessData.name}</Text>
      <Text style={styles.subheader}>Your Business</Text>
      <FilterableList
        items={items}
        emptyMessage="Your business contains no items"
        containerStyle={{ width: "100%" }}
      >
        {(item) => <BusinessItemNode item={item} />}
      </FilterableList>
    </View>
  );
};

export default ItemsScreen;
