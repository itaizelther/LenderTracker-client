import React from "react";
import { Dialog, Text } from "@rneui/themed";

import useStyles from "./confirmStyles";

const LendConfirmDialog = ({ isVisible, item, business }) => {
  const styles = useStyles();

  return (
    <Dialog isVisible={isVisible} overlayStyle={styles.container}>
      <Dialog.Title title="Confirmation" />
      <Text style={styles.content}>
        <Text>You're about to lend </Text>
        <Text style={styles.dynamicContent}>{item}</Text>
        <Text> from </Text>
        <Text style={styles.dynamicContent}>{business}</Text>
        <Text>.</Text>
      </Text>
      <Text style={styles.content}>Please confirm your action.</Text>
      <Dialog.Actions>
        <Dialog.Button title="Confirm" type="solid" />
        <Dialog.Button title="Cancel" />
      </Dialog.Actions>
    </Dialog>
  );
};

export default LendConfirmDialog;
