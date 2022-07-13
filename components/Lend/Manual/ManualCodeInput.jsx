import React from "react";
import { View } from "react-native";
import { Text, Input, Button } from "@rneui/themed";

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
        <Button icon={{ name: "search", color: "white", size: 15 }} />
      </View>
    </>
  );
};

export default ManualCodeInput;
