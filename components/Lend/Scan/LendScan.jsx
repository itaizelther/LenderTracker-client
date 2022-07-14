import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { BarCodeScanner } from "expo-barcode-scanner";

import useStyles from "./scanStyles";

const LendScan = ({ onSwitchMode, onSelectItem, enable }) => {
  const [_, setHasPermission] = useState(null);
  const styles = useStyles();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    onSelectItem(type, data);
  };

  return (
    <View style={styles.wideContainerStyle}>
      <BarCodeScanner
        onBarCodeScanned={enable ? undefined : handleBarCodeScanned}
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
