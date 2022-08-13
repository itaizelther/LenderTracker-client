import React, { useState } from "react";
import { Dialog, Text } from "@rneui/themed";
import useStyles from "../businessStyles";

import SigninInput from "../../Signin/SigninInput";

const AddBusinessItemDialog = ({ isVisible, onCancel, onCreate }) => {
  const [name, setName] = useState("");
  const styles = useStyles();

  return (
    <Dialog isVisible={isVisible} overlayStyle={styles.addItemContainer}>
      <Dialog.Title title="Item Creation" />
      <Text style={{ marginBottom: 20 }}>
        Fill in the required fields to add an item to your business!
      </Text>
      <SigninInput field="Name" onChangeText={setName} />
      <Dialog.Actions>
        <Dialog.Button
          title="Create"
          type="solid"
          onPress={() => onCreate({ name })}
          disabled={!name}
        />
        <Dialog.Button title="Cancel" onPress={onCancel} />
      </Dialog.Actions>
    </Dialog>
  );
};

export default AddBusinessItemDialog;
