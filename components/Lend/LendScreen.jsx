import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showMessage } from "react-native-flash-message";

import LendInstructions from "./Instructions/LendInstructions";
import LendScan from "./Scan/LendScan";
import LendManual from "./Manual/LendManual";
import LendConfirmDialog from "../Confirm/LendConfirmDialog";
import boldMessageHelper from "../Confirm/boldMessageHelper";

const LendScreen = () => {
  // store lend method selected by user
  const [lendMode, setLendMode] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  // Read storage, check if user already saw instructions
  useEffect(() => {
    AsyncStorage.getItem("@lend_mode").then(setLendMode);
  }, []);

  const switchMode = (isQrMode) => {
    const mode = isQrMode ? "QR" : "manual";
    setLendMode(mode);
    AsyncStorage.setItem("@lend_mode", mode);
  };

  const onSelectItem = (item, business) => {
    setShowConfirm(true);
    setSelectedBusiness(business);
    setSelectedItem(item);
  };

  const onConfirmItem = () => {
    setShowConfirm(false);
    showMessage({
      message: "It's done!",
      description: `successfully lended ${selectedItem}.`,
      type: "success",
    });
  };

  return (
    <View>
      {lendMode === null ? (
        <LendInstructions onDone={switchMode} />
      ) : lendMode === "QR" ? (
        <LendScan
          onSwitchMode={() => switchMode(false)}
          onSelectItem={onSelectItem}
          enable={!showConfirm}
        />
      ) : (
        <LendManual
          onSwitchMode={() => switchMode(true)}
          onSelectItem={onSelectItem}
        />
      )}
      <LendConfirmDialog
        isVisible={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={onConfirmItem}
        messageNode={boldMessageHelper`You're about to lend ${selectedItem} from ${selectedBusiness}.`}
      />
    </View>
  );
};

export default LendScreen;
