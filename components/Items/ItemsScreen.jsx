import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import useStyles from "./itemsStyles";
import { showMessage } from "react-native-flash-message";

import FilterableList from "../Common/FilterableList";
import LendConfirmDialog from "../Confirm/LendConfirmDialog";
import boldMessageHelper from "../Confirm/boldMessageHelper";
import LendedItemNode from "./LendedItemNode";

const ItemsScreen = () => {
  const styles = useStyles();
  const [showConfirm, setShowConfirm] = useState(false);
  const [removeItem, setRemoveItem] = useState({});

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

  const onAboutToRemoveItem = (item) => {
    setRemoveItem(item);
    setShowConfirm(true);
  };

  const onConfirmRemoveItem = () => {
    setShowConfirm(false);
    showMessage({
      message: "It's done!",
      description: `successfully removed ${removeItem.name}.`,
      type: "success",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Items</Text>
      <FilterableList
        items={list}
        emptyMessage="You do not lend any items"
        containerStyle={{ width: "100%" }}
      >
        {(item) => (
          <LendedItemNode item={item} onItemRemove={onAboutToRemoveItem} />
        )}
      </FilterableList>

      <LendConfirmDialog
        isVisible={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={onConfirmRemoveItem}
        messageNode={boldMessageHelper`You're about to remove ${removeItem.name} from your items.`}
      />
    </View>
  );
};

export default ItemsScreen;
