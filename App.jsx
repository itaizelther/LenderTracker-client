import React from "react";
import { I18nManager } from "react-native";
import { createTheme, ThemeProvider } from "@rneui/themed";
import FlashMessage from "react-native-flash-message";
import { configure } from "axios-hooks";
import axios from "axios";
import Constants from "expo-constants";

import MainNavigation from "./components/MainNavigation";
import UserProvider from "./components/UserProvider";

export default function App() {
  // Create theme of react native elements
  const theme = createTheme({});

  // Configure axios of project
  // assumes backend runs on debbuger computer
  const { manifest } = Constants;
  const localAxios = axios.create({
    baseURL: `http://${manifest.debuggerHost.split(":").shift()}:3000`,
  });
  configure({ axios: localAxios });

  // Disable RTL in application
  try {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    I18nManager.swapLeftAndRightInRTL(false);
  } catch (e) {
    console.log(e);
  }

  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <MainNavigation />
        <FlashMessage position="top" />
      </UserProvider>
    </ThemeProvider>
  );
}
