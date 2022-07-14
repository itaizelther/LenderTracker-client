import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LendInstructions from "./Instructions/LendInstructions";
import LendScan from "./Scan/LendScan";
import LendManual from "./Manual/LendManual";
import LendConfirmDialog from "./Confirm/LendConfirmDialog";

const LendScreen = () => {
  // store lend method selected by user
  const [lendMode, setLendMode] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

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

  const onSelectItem = (business, item) => {
    setShowConfirm(true);
    setSelectedBusiness(business);
    setSelectedItem(item);
  };

  return (
    <View>
      {lendMode === null ? (
        <LendInstructions onDone={switchMode} />
      ) : lendMode === "QR" ? (
        <LendScan
          onSwitchMode={() => switchMode(false)}
          onSelectItem={onSelectItem}
        />
      ) : (
        <LendManual
          onSwitchMode={() => switchMode(true)}
          onSelectItem={onSelectItem}
          enable={!showConfirm}
        />
      )}
      <LendConfirmDialog
        isVisible={showConfirm}
        item={selectedItem}
        business={selectedBusiness}
        onCancel={() => setShowConfirm(false)}
      />
    </View>
  );
};

export default LendScreen;
