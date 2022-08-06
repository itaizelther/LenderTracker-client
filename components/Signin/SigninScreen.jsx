import React, { useState, useContext, useReducer, useEffect } from "react";
import { View } from "react-native";
import { Text, Button } from "@rneui/themed";
import { showMessage } from "react-native-flash-message";
import useAxios from "axios-hooks";
import Hashes from "jshashes";

import useStyles from "./SigninStyles";
import SigninInput from "./SigninInput";
import UserContext from "../../context/userContext";

const SigninScreen = () => {
  const styles = useStyles();
  const [isLogin, setIsLogin] = useState(true);
  const [formValues = {}, setFormValues] = useReducer((state, newState) => ({
    ...state,
    ...newState,
  }));
  const [, setUserId] = useContext(UserContext);
  const [{ data: getUserRes }, searchUser] = useAxios(
    { url: "/api/users", params: { username: formValues?.username } },
    { manual: true }
  );
  const [, createUser] = useAxios(
    { url: "/api/users", method: "POST" },
    { manual: true }
  );
  const SHA256 = new Hashes.SHA256();

  // on new login attempt
  useEffect(() => {
    onLogin();
  }, [getUserRes]);

  const isFormFilled = () => {
    const formFields = ["username", "password"];
    if (!isLogin) formFields.push(["verify"]);
    return formFields.reduce(
      (prev, curr) =>
        prev && formValues.hasOwnProperty(curr) && formValues[curr]
    );
  };

  const onLogin = () => {
    if (formValues?.username != null) {
      if (getUserRes == null || getUserRes.length == 0) {
        showMessage({
          message: "No such user",
          description: `We could not find ${formValues.username}.`,
          type: "danger",
        });
      } else {
        if (getUserRes[0].password === SHA256.hex(formValues.password)) {
          setUserId(getUserRes[0].id);
        } else {
          showMessage({
            message: "Password incorrect",
            description: "The password does not match the account.",
            type: "danger",
          });
        }
      }
    }
  };

  const onRegister = () => {
    if (formValues.password != formValues.verify) {
      showMessage({
        message: "Please verify your password",
        description: "Your password and verify password do not match",
        type: "danger",
      });
    } else {
      createUser({
        data: {
          username: formValues.username,
          password: SHA256.hex(formValues.password),
        },
      }).then((res) => setUserId(res.data.id));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lender</Text>
      <Text style={styles.header}>Tracker</Text>

      {/* white space */}
      <View style={{ height: 50 }} />

      <SigninInput
        field="USERNAME"
        onChangeText={(value) => setFormValues({ username: value })}
      />
      <SigninInput
        field="PASSWORD"
        isSecure={true}
        onChangeText={(value) => setFormValues({ password: value })}
      />
      {!isLogin && (
        <SigninInput
          field="VERIFY PASSWORD"
          isSecure={true}
          onChangeText={(value) => setFormValues({ verify: value })}
        />
      )}
      <View style={styles.signInContainer}>
        <Button
          onPress={() => (isLogin ? searchUser() : onRegister())}
          disabled={!isFormFilled()}
        >
          {isLogin ? "Sign in" : "Sign up"}
        </Button>
      </View>

      {/* white space */}
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
