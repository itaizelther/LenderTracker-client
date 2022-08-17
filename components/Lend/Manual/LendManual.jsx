import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import useAxios from "axios-hooks";

import useStyles from "./lendStyles";
import ManualCodeInput from "./ManualCodeInput";
import LendBusinessList from "./LendBusinessList";

const LendManual = ({ onSwitchMode, onSelectItem }) => {
  const [businessName, setBusinessName] = useState("");
  const styles = useStyles();

  const [, itemById] = useAxios("/api/items", { manual: true });
  const [{ data: businessByName = [] }] = useAxios({
    url: "/api/groups",
    params: { name: businessName },
  });

  const onSearchItem = async (itemId) => {
    const { data: itemData } = await itemById({
      url: `/api/items/${itemId}`,
    });

    onSelectItem(itemData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.manualContent}>
        <ManualCodeInput
          label="Enter an item code:"
          icon="tag"
          onSubmit={onSearchItem}
        />
        <Text style={styles.orSeperator}>- OR -</Text>
        <ManualCodeInput
          label="Search up the business:"
          icon="store"
          onSubmit={setBusinessName}
        />
        {businessByName.length !== 0 && (
          <LendBusinessList
            businessId={businessByName[0].id}
            onSelectItem={(item) => onSelectItem(item, businessByName[0])}
          />
        )}
      </View>
      <Button onPress={onSwitchMode} style={{ marginBottom: 30 }}>
        Switch to camera
      </Button>
    </View>
  );
};

export default LendManual;
