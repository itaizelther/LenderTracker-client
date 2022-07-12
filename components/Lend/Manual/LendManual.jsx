import React from "react";
import { View, Dimensions } from "react-native";
import { Button, Text } from "@rneui/themed";
import useStyles from "./lendStyles";

const LendManual = ({ onSwitchMode }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.manualContent}>
        <Text>Enter item code:</Text>
      </View>
      <Button onPress={onSwitchMode} style={{ marginBottom: 30 }}>
        Switch to camera
      </Button>
    </View>
  );
};

export default LendManual;
