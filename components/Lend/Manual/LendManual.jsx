import React from "react";
import { View } from "react-native";
import { Button, Text } from "@rneui/themed";

import useStyles from "./lendStyles";
import ManualCodeInput from "./ManualCodeInput";

const LendManual = ({ onSwitchMode }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.manualContent}>
        <ManualCodeInput label="Enter an item code:" icon="tag" />
        <Text style={styles.orSeperator}>- OR -</Text>
        <ManualCodeInput label="Search up the business:" icon="store" />
      </View>
      <Button onPress={onSwitchMode} style={{ marginBottom: 30 }}>
        Switch to camera
      </Button>
    </View>
  );
};

export default LendManual;
