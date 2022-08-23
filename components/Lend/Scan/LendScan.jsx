import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { BarCodeScanner } from "expo-barcode-scanner";
import { showMessage } from "react-native-flash-message";
import useAxios from "axios-hooks";

import useStyles from "./scanStyles";

const LendScan = ({ onSwitchMode, onSelectItem, enable }) => {
  const [handling, setHandling] = useState(false);
  const [errorDelay, setErrorDelay] = useState(false);
  const [, setHasPermission] = useState(null);
  const styles = useStyles();

  const [, itemById] = useAxios("/api/items", { manual: true });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = useCallback(
    async ({ data }) => {
      setHandling(true);
      try {
        const { data: itemData } = await itemById({
          url: `/api/items/${data}`,
        });
        onSelectItem(itemData);
      } catch (AxiosError) {
        if (!errorDelay) {
          setErrorDelay(true);
          showMessage({
            message: "Invalid QR Code",
            description: `${data} is not a valid item id.`,
            type: "danger",
          });
          setTimeout(() => setErrorDelay(false), 2000);
        }
      } finally {
        setHandling(false);
      }
    },
    [setHandling, itemById, onSelectItem, setErrorDelay, errorDelay]
  );

  return (
    <View style={styles.wideContainerStyle}>
      <BarCodeScanner
        onBarCodeScanned={
          !handling && enable ? handleBarCodeScanned : undefined
        }
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
