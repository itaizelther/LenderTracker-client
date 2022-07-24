import React from "react";
import { Dialog, Text } from "@rneui/themed";

import useStyles from "./confirmStyles";

const LendConfirmDialog = ({ isVisible, onCancel, onConfirm, template }) => {
  const styles = useStyles();

  return (
    <Dialog isVisible={isVisible} overlayStyle={styles.container}>
      <Dialog.Title title="Confirmation" />
      <Text style={styles.content}>{template()}</Text>
      <Text style={styles.content}>Please confirm your action.</Text>
      <Dialog.Actions>
        <Dialog.Button title="Confirm" type="solid" onPress={onConfirm} />
        <Dialog.Button title="Cancel" onPress={onCancel} />
      </Dialog.Actions>
    </Dialog>
  );
};

export default LendConfirmDialog;
