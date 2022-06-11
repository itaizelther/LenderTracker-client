import React, { useState, useEffect } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { Text, Button } from "@rneui/themed";
import { BarCodeScanner } from "expo-barcode-scanner";

const LendScan = ({ onSwitchMode }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
    <View
      style={{
        flex: 1,
        width: Dimensions.get("window").width,
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <Button
        style={{ marginBottom: 30 }}
        title={"Switch to manual"}
        onPress={onSwitchMode}
      />
    </View>
  );
};

export default LendScan;
