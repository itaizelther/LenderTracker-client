import React, { useState, useEffect } from "react";
import { Text, FAB } from "@rneui/themed";
import useAxios from "axios-hooks";

import eventBus from "../../../context/eventBus";
import useStyles from "../businessStyles";
import FilterableList from "../../Common/FilterableList";
import BusinessItemNode from "./BusinessItemNode";
import AddBusinessItemDialog from "./AddBusinessItemDialog";

const BusinessManage = ({ business }) => {
  const styles = useStyles();
  const [showAddDialog, setShowAddDialog] = useState(false);

  const [{ data: items = [] }, refreshItems] = useAxios({
    url: "/api/items",
    params: { groupId: business.id },
  });

  const [, createItem] = useAxios(
    { url: "/api/items", method: "POST" },
    { manual: true }
  );

  useEffect(() => eventBus.on("refresh", refreshItems), []);

  const onAddItem = async ({ name }) => {
    const itemId = `${name.charAt(0)}${Math.floor(Math.random() * 10000)}`;

    await createItem({
      url: `/api/items/${itemId}`,
      data: {
        name,
        ownerId: null,
        groupId: business.id,
        groupName: business.name,
        date: new Date().toLocaleDateString(),
      },
    });
    setShowAddDialog(false);
    eventBus.emit("refresh");
  };

  return (
    <>
      <Text style={styles.header}>{business.name}</Text>
      <Text style={styles.subheader}>Your Business</Text>
      <FilterableList
        items={items}
        emptyMessage="Your business contains no items"
        containerStyle={{ width: "100%", flex: 1 }}
      >
        {(item) => <BusinessItemNode item={item} />}
      </FilterableList>
      <FAB
        color={styles.addButton.color}
        icon={{ name: "add", color: "white" }}
        placement="middle"
        onPress={() => setShowAddDialog(true)}
      />
      <AddBusinessItemDialog
        isVisible={showAddDialog}
        onCancel={() => setShowAddDialog(false)}
        onCreate={onAddItem}
      />
    </>
  );
};

export default BusinessManage;
