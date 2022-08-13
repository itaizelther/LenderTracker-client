import React, { useState, useContext, useEffect } from "react";
import { View } from "react-native";
import { Text, FAB } from "@rneui/themed";
import { showMessage } from "react-native-flash-message";
import useAxios from "axios-hooks";
import useStyles from "./itemsStyles";

import FilterableList from "../Common/FilterableList";
import LendConfirmDialog from "../Confirm/LendConfirmDialog";
import boldMessageHelper from "../Confirm/boldMessageHelper";
import LendedItemNode from "./LendedItemNode";
import UserContext from "../../context/userContext";
import eventBus from "../../context/eventBus";

const ItemsScreen = () => {
  const styles = useStyles();
  const [showConfirm, setShowConfirm] = useState(false);
  const [removeItem, setRemoveItem] = useState({});
  const [user, setUserId] = useContext(UserContext);

  const [{ data: items = [] }, reloadItems] = useAxios({
    url: "/api/items",
    params: { ownerId: user.id },
  });

  const [, updateItem] = useAxios(
    { url: `/api/items/${removeItem.id}`, method: "PUT" },
    { manual: true }
  );

  // When user lends new item in app
  useEffect(() => eventBus.on("refresh", reloadItems), []);

  const onAboutToRemoveItem = (item) => {
    setRemoveItem(item);
    setShowConfirm(true);
  };

  const onConfirmRemoveItem = () => {
    updateItem({ data: { ownerId: null } }).then(() =>
      eventBus.emit("refresh")
    );
    setShowConfirm(false);
    showMessage({
      message: "It's done!",
      description: `successfully removed ${removeItem.name}.`,
      type: "success",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{user.username}</Text>
      <Text style={styles.subheader}>Your Items</Text>
      <FilterableList
        items={items}
        emptyMessage="You do not lend any items"
        containerStyle={{ width: "100%" }}
      >
        {(item) => (
          <LendedItemNode item={item} onItemRemove={onAboutToRemoveItem} />
        )}
      </FilterableList>
      <FAB
        color={styles.logoutButton.color}
        icon={{ name: "logout", color: "white" }}
        placement="right"
        onPress={() => setUserId(null)}
      />
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
