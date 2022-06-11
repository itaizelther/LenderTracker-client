import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LendInstructions from "./LendInstructions";

const LendScreen = () => {
  // store lend method selected by user
  const [lendMode, setLendMode] = useState(null);

  // Read storage, check if user already saw instructions
  useEffect(() => {
    const readLendMode = async () => {
      setLendMode(await AsyncStorage.getItem("@lend_mode"));
    };
    readLendMode();
  }, []);

  const instructionsHandler = (isQrMode) => {
    const mode = isQrMode ? "QR" : "manual";
    setLendMode(mode);
    AsyncStorage.setItem("@lend_mode", mode);
  };

  return (
    <View>
      {lendMode === null ? (
        <LendInstructions onDone={instructionsHandler} />
      ) : lendMode === "QR" ? (
        <Text>QR</Text>
      ) : (
        <Text>manual</Text>
      )}
    </View>
  );
};

export default LendScreen;
