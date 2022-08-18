import React, { useCallback } from "react";
import { View, Keyboard } from "react-native";
import { Text, Input, Button } from "@rneui/themed";
import { useState } from "react";

import useStyles from "./lendStyles";

const ManualCodeInput = ({ label, icon, onSubmit }) => {
  const [search, setSearch] = useState("");
  const styles = useStyles();

  const onDoneInput = useCallback(() => {
    Keyboard.dismiss();
    onSubmit(search);
  }, [onSubmit, search]);

  return (
    <>
      <Text style={{ fontSize: 20 }}>{label}</Text>
      <View style={styles.codeInput}>
        <Input
          leftIcon={{ name: icon, color: "gray" }}
          onChangeText={setSearch}
          onSubmitEditing={onDoneInput}
        />
        <Button
          icon={{ name: "search", color: "white", size: 15 }}
          onPress={onDoneInput}
          disabled={!search}
        />
      </View>
    </>
  );
};

export default ManualCodeInput;
