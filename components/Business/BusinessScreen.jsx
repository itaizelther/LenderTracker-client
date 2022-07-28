import React, { useState } from "react";
import { View } from "react-native";
import { Text, Input } from "@rneui/themed";
import { showMessage } from "react-native-flash-message";

import useStyles from "./businessStyles";
import FilterableList from "../Common/FilterableList";
import BusinessItemNode from "./BusinessItemNode";

const ItemsScreen = () => {
  const styles = useStyles();

  const list = [
    {
      name: "name1",
      id: 1,
      date: "23.2.2022",
      business: "asidal",
    },
    {
      name: "name2",
      id: 2,
      date: "3.2.2022",
      business: "tommy",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Asidal</Text>
      <Text style={styles.subheader}>Your Business</Text>
      <FilterableList
        items={list}
        emptyMessage="Your business contains no items"
        containerStyle={{ width: "100%" }}
      >
        {(item) => <BusinessItemNode item={item} />}
      </FilterableList>
    </View>
  );
};

export default ItemsScreen;
