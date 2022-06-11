import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LendInstructions from "./LendInstructions";
import LendScan from "./LendScan";

const LendScreen = () => {
  // store lend method selected by user
  const [lendMode, setLendMode] = useState(null);

  // Read storage, check if user already saw instructions
  useEffect(() => {
    (async () => {
      setLendMode(await AsyncStorage.getItem("@lend_mode"));
    })();
  }, []);

  const switchMode = (isQrMode) => {
    const mode = isQrMode ? "QR" : "manual";
    setLendMode(mode);
    AsyncStorage.setItem("@lend_mode", mode);
  };

  return (
    <View>
      {lendMode === null ? (
        <LendInstructions onDone={switchMode} />
      ) : lendMode === "QR" ? (
        <LendScan onSwitchMode={() => switchMode(false)} />
      ) : (
        <Button onPress={() => switchMode(true)}>to qr</Button>
      )}
    </View>
  );
};

export default LendScreen;
