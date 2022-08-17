import React, { useEffect, useState, useContext } from "react";
import { View } from "react-native";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAxios from "axios-hooks";

import eventBus from "../../context/eventBus";
import UserContext from "../../context/userContext";
import LendInstructions from "./Instructions/LendInstructions";
import LendScan from "./Scan/LendScan";
import LendManual from "./Manual/LendManual";
import LendConfirmDialog from "../Confirm/LendConfirmDialog";
import boldMessageHelper from "../Confirm/boldMessageHelper";

const LendScreen = () => {
  // store lend method selected by user
  const [lendMode, setLendMode] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedBusiness, setSelectedBusiness] = useState({});
  const [user] = useContext(UserContext);

  const LEND_MODE_STORAGE_KEY = "@lend_mode";

  // Read storage, check if user already saw instructions
  useEffect(() => {
    AsyncStorage.getItem(LEND_MODE_STORAGE_KEY).then(setLendMode);
  }, []);

  const [, updateItem] = useAxios(
    { url: `/api/items/${selectedItem.id}`, method: "PUT" },
    { manual: true }
  );

  const switchMode = (isQrMode) => {
    const mode = isQrMode ? "QR" : "manual";
    setLendMode(mode);
    AsyncStorage.setItem(LEND_MODE_STORAGE_KEY, mode);
  };

  const onSelectItem = (item, business) => {
    setSelectedItem(item);
    setSelectedBusiness(business);
    setShowConfirm(true);
  };

  const onConfirmItem = () => {
    updateItem({
      data: {
        ownerId: user.id,
        ownerName: user.username,
        date: new Date().toLocaleDateString(),
      },
    }).then(() => eventBus.emit("refresh"));
    setShowConfirm(false);
    showMessage({
      message: "It's done!",
      description: `successfully lended ${selectedItem.name}.`,
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
        messageNode={boldMessageHelper`You're about to lend ${selectedItem?.name} from ${selectedBusiness?.name}.`}
      />
    </View>
  );
};

export default LendScreen;
