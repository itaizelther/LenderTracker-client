import React from "react";
import { View } from "react-native";
import { Text, Input } from "@rneui/themed";
import useStyles from "./itemsStyles";

import LendedItemsList from "./LendedItemsList";

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
      <Text style={styles.header}>My Items</Text>
      <Input
        leftIcon={{ name: "filter-alt", color: "gray" }}
        placeholder="Enter words to filter by..."
        inputStyle={{ textAlign: "left" }}
      />
      {list.length === 0 ? (
        <Text>You do not lend any items at the moment.</Text>
      ) : (
        <LendedItemsList items={list} />
      )}
    </View>
  );
};

export default ItemsScreen;
