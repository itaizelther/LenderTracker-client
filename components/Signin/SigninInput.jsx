import React from "react";
import { View } from "react-native";
import { Text, Input } from "@rneui/themed";
import useStyles from "./SigninStyles";

const SigninInput = ({ field, isSecure = false, onChangeText }) => {
  const styles = useStyles();

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{field}</Text>
      <Input
        style={styles.inputField}
        secureTextEntry={isSecure}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SigninInput;
