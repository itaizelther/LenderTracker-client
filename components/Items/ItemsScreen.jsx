import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Text, FAB } from "@rneui/themed";
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
  const [user, setUserId] = useContext(UserContext);

  const [{ data: items = [] }, reloadItems] = useAxios({
    url: "/api/items",
    params: { ownerId: user.id },
  });

  const [, updateItem] = useAxios(
    { url: `/api/items/${removeItem.id}`, method: "PUT" },
    { manual: true }
  );

  const onAboutToRemoveItem = (item) => {
    setRemoveItem(item);
    setShowConfirm(true);
  };

  const onConfirmRemoveItem = () => {
    updateItem({ data: { ownerId: null } });
    setShowConfirm(false);
    reloadItems();
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
