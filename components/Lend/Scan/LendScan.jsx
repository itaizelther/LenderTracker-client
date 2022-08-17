import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { BarCodeScanner } from "expo-barcode-scanner";
import useAxios from "axios-hooks";

import useStyles from "./scanStyles";

const LendScan = ({ onSwitchMode, onSelectItem, enable }) => {
  const [_, setHasPermission] = useState(null);
  const styles = useStyles();

  const [, itemById] = useAxios("/api/items", { manual: true });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }) => {
    const { data: itemData } = await itemById({
      url: `/api/items/${data}`,
    });

    onSelectItem(itemData);
  };

  return (
    <View style={styles.wideContainerStyle}>
      <BarCodeScanner
        onBarCodeScanned={enable ? handleBarCodeScanned : undefined}
        style={StyleSheet.absoluteFillObject}
      />
      <Button
        style={{ marginBottom: 30 }}
        title="Switch to manual"
        onPress={onSwitchMode}
      />
    </View>
  );
};

export default LendScan;
