import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button } from "@rneui/themed";
import useAxios from "axios-hooks";

import SigninInput from "../Signin/SigninInput";
import useStyles from "./businessStyles";

const BusinessCreate = () => {
  const styles = useStyles();
  const [businessName, setBusinessName] = useState("");

  const onCreateBusiness = () => {};

  return (
    <>
      <Text style={styles.header}>No Business?</Text>

      <View style={{ height: 20 }} />

      <Text style={styles.createInstructions}>
        You do not have a business under your name.
      </Text>
      <Text style={styles.createInstructions}>You may create one now.</Text>

      <View style={{ height: 30 }} />

      <SigninInput field="Business Name" onChangeText={setBusinessName} />
      <View style={styles.createContainer}>
        <Button disabled={!businessName} onPress={onCreateBusiness}>
          Create
        </Button>
      </View>
    </>
  );
};

export default BusinessCreate;
