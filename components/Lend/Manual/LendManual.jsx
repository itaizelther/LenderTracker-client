import React from "react";
import { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "@rneui/themed";

import useStyles from "./lendStyles";
import ManualCodeInput from "./ManualCodeInput";
import LendBusinessList from "./LendBusinessList";

const LendManual = ({ onSwitchMode, onSelectItem }) => {
  const [business, setBusiness] = useState("");
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.manualContent}>
        <ManualCodeInput
          label="Enter an item code:"
          icon="tag"
          onSubmit={(item) => onSelectItem(item, null)}
        />
        <Text style={styles.orSeperator}>- OR -</Text>
        <ManualCodeInput
          label="Search up the business:"
          icon="store"
          onSubmit={setBusiness}
        />
        {business !== "" && (
          <LendBusinessList
            onSelectItem={(item) => onSelectItem(item.name, business)}
          />
        )}
      </View>
      <Button onPress={onSwitchMode} style={{ marginBottom: 30 }}>
        Switch to camera
      </Button>
    </View>
  );
};

export default LendManual;
