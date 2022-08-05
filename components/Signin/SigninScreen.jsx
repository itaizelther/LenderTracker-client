import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button } from "@rneui/themed";
import useStyles from "./SigninStyles";

import SigninInput from "./SigninInput";

const SigninScreen = () => {
  const styles = useStyles();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lender</Text>
      <Text style={styles.header}>Tracker</Text>

      {/* white space */}
      <View style={{ height: 50 }} />

      <SigninInput field="USERNAME" />
      <SigninInput field="PASSWORD" isSecure={true} />
      {!isLogin && <SigninInput field="VERIFY PASSWORD" isSecure={true} />}
      <View style={styles.signInContainer}>
        <Button>{isLogin ? "Sign in" : "Sign up"}</Button>
      </View>

      <View style={{ height: 20 }} />

      <Text style={{ fontSize: 16 }}>
        {isLogin ? "Don't have an account yet?" : "Already have an account?"}
      </Text>
      <Text
        style={styles.signUpButton}
        onPress={() => setIsLogin((prev) => !prev)}
      >
        {isLogin ? "Sign up" : "Sign in"}
      </Text>
    </View>
  );
};

export default SigninScreen;
