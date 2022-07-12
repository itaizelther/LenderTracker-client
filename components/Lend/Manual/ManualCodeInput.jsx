import React from "react";
import { View } from "react-native";
import { Text, Input } from "@rneui/themed";

const ManualCodeInput = ({ label, icon }) => {
  return (
    <>
      <Text style={{ fontSize: 20 }}>{label}</Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Input leftIcon={{ name: icon, color: "gray" }} />
      </View>
    </>
  );
};

export default ManualCodeInput;
