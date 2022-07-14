import React from "react";
import { View } from "react-native";
import { Button, Text } from "@rneui/themed";

import useStyles from "./lendStyles";
import ManualCodeInput from "./ManualCodeInput";

const LendManual = ({ onSwitchMode, onSelectItem }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.manualContent}>
        <ManualCodeInput
          label="Enter an item code:"
          icon="tag"
          onSubmit={(item) => onSelectItem(null, item)}
        />
        <Text style={styles.orSeperator}>- OR -</Text>
        <ManualCodeInput
          label="Search up the business:"
          icon="store"
          onSubmit={(business) => onSelectItem(business, null)}
        />
      </View>
      <Button onPress={onSwitchMode} style={{ marginBottom: 30 }}>
        Switch to camera
      </Button>
    </View>
  );
};

export default LendManual;
