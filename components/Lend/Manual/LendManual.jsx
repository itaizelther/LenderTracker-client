import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button, Text } from "@rneui/themed";
import useAxios from "axios-hooks";

import useStyles from "./lendStyles";
import ManualCodeInput from "./ManualCodeInput";
import LendBusinessList from "./LendBusinessList";

const LendManual = ({ onSwitchMode, onSelectItem }) => {
  const [business, setBusiness] = useState("");
  const styles = useStyles();
  const [, manualAxios] = useAxios("", { manual: true });
  const [{ data: selectedBusiness = [] }] = useAxios({
    url: "/api/groups",
    params: { name: business },
  });

  const onSearchItem = async (itemId) => {
    const { data: itemData } = await manualAxios({
      url: `/api/items/${itemId}`,
    });

    onSelectItem(itemData.name);
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
          onSubmit={setBusiness}
        />
        {selectedBusiness.length !== 0 && (
          <LendBusinessList
            businessId={selectedBusiness[0].id}
            onSelectItem={(item) => onSelectItem(item.name, business)}
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
