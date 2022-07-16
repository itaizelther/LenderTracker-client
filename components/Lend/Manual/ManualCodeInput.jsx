import React from "react";
import { View } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import { useState } from "react";

import useStyles from "./lendStyles";

const ManualCodeInput = ({ label, icon, onSubmit }) => {
  const [search, setSearch] = useState("");
  const styles = useStyles();

  return (
    <>
      <Text style={{ fontSize: 20 }}>{label}</Text>
      <View style={styles.codeInput}>
        <Input
          leftIcon={{ name: icon, color: "gray" }}
          onChangeText={setSearch}
          onSubmitEditing={() => onSubmit(search)}
        />
        <Button
          icon={{ name: "search", color: "white", size: 15 }}
          onPress={() => onSubmit(search)}
        />
      </View>
    </>
  );
};

export default ManualCodeInput;
