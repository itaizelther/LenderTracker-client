import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { BarCodeScanner } from "expo-barcode-scanner";

import useStyles from "./scanStyles";

const LendScan = ({ onSwitchMode }) => {
  const [_, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const styles = useStyles();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  return (
    <View style={styles.wideContainerStyle}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
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
