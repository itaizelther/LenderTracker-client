import React from "react";
import { View } from "react-native";
import { Text, Chip, Image, Button } from "@rneui/themed";
import useStyles from "./instructionsStyles";
import handshake from "../../assets/handshake.png";

const LendInstructions = ({ onDone }) => {
  const styles = useStyles();
  const steps = ["Scan QR", "Confirm your selection", "Done!"];

  return (
    <View style={styles.container}>
      <Image source={handshake} style={styles.handshake} />
      <Text style={styles.mainTitle}>Lending is simple:</Text>
      <View>
        {steps.map((item, index) => (
          <View style={styles.stepStyle} key={index}>
            <Chip {...styles.indicator} disabled type="outline">
              <Text>{`${index + 1}`}</Text>
            </Chip>
            <Text style={styles.stepText}>{item}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <Button onPress={() => onDone(true)}>Let's go</Button>
        <Button type="clear" onPress={() => onDone(false)}>
          I prefer to lend manually
        </Button>
      </View>
    </View>
  );
};

export default LendInstructions;
