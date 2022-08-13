import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "@rneui/themed";
import useAxios from "axios-hooks";

import SigninInput from "../../Signin/SigninInput";
import UserContext from "../../../context/userContext";
import useStyles from "../businessStyles";

const BusinessCreate = ({ onSelect }) => {
  const styles = useStyles();
  const [businessName, setBusinessName] = useState("");
  const [, createBusiness] = useAxios(
    { url: "/api/groups", method: "POST" },
    { manual: true }
  );
  const [user] = useContext(UserContext);

  const onCreateBusiness = () => {
    createBusiness({ data: { name: businessName, ownerId: user.id } }).then(
      () => onSelect()
    );
  };

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
