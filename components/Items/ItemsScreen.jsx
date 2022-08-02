import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import useStyles from "./itemsStyles";
import { showMessage } from "react-native-flash-message";
import useAxios from "axios-hooks";

import FilterableList from "../Common/FilterableList";
import LendConfirmDialog from "../Confirm/LendConfirmDialog";
import boldMessageHelper from "../Confirm/boldMessageHelper";
import LendedItemNode from "./LendedItemNode";
import UserContext from "../../context/userContext";

const ItemsScreen = () => {
  const styles = useStyles();
  const [showConfirm, setShowConfirm] = useState(false);
  const [removeItem, setRemoveItem] = useState({});
  const user = useContext(UserContext);

  const [{ data: items = [] }] = useAxios("/api/items");

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
        items={items}
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
