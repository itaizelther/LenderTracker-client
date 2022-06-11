import React, { useState } from "react";
import { Platform, View } from "react-native";
import { Tab, TabView, Text, makeStyles } from "@rneui/themed";

import MyComponent from "./MyComponent";
import LendScreen from "./Lend/LendScreen";

const MainNavigation = () => {
  const [index, setIndex] = useState(0);
  const styles = useStyles();

  const tabs = [
    {
      component: <Text style={{ fontSize: 100 }}>HI!!</Text>,
      title: "Items",
      icon: { name: "category", color: "white" },
    },
    {
      component: <LendScreen />,
      title: "Lend",
      icon: { name: "shopping-basket", color: "white" },
    },
    {
      component: <MyComponent />,
      title: "Business",
      icon: { name: "store", color: "white" },
    },
  ];

  return (
    <View style={styles.container}>
      <TabView value={index} onChange={setIndex} animationType="spring">
        {tabs.map((tab, index) => (
          <TabView.Item style={styles.screen} key={index}>
            {tab.component}
          </TabView.Item>
        ))}
      </TabView>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
        variant="primary"
      >
        {tabs.map((tab, index) => (
          <Tab.Item
            title={tab.title}
            icon={tab.icon}
            titleStyle={styles.tabTitle}
            key={index}
          />
        ))}
      </Tab>
    </View>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    backgroundColor: theme.colors.background,
  },
  screen: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  tabTitle: {
    fontSize: 12,
  },
  indicatorStyle: {
    backgroundColor: "white",
    height: 3,
  },
}));

export default MainNavigation;
