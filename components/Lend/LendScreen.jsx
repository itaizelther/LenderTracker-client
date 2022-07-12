import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LendInstructions from "./Instructions/LendInstructions";
import LendScan from "./Scan/LendScan";
import LendManual from "./Manual/LendManual";

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
        <LendManual onSwitchMode={() => switchMode(true)} />
      )}
    </View>
  );
};

export default LendScreen;
