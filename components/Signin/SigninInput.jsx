import React from "react";
import { View } from "react-native";
import { Text, Input } from "@rneui/themed";
import useStyles from "./SigninStyles";

const SigninInput = ({ field, isSecure = false }) => {
  const styles = useStyles();

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{field}</Text>
      <Input style={styles.inputField} secureTextEntry={isSecure} />
    </View>
  );
};

export default SigninInput;
