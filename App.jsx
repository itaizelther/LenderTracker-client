import React from "react";
import { I18nManager } from "react-native";
import { createTheme, ThemeProvider } from "@rneui/themed";
import FlashMessage from "react-native-flash-message";
import MainNavigation from "./components/MainNavigation";

const theme = createTheme({});

// Disable RTL in application
try {
  I18nManager.allowRTL(false);
  I18nManager.forceRTL(false);
  I18nManager.swapLeftAndRightInRTL(false);
} catch (e) {
  console.log(e);
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainNavigation />
      <FlashMessage position="top" />
    </ThemeProvider>
  );
}
