import React, { useState } from "react";
import { View } from "react-native";
import { Tab, TabView, Text } from "@rneui/themed";

import BusinessScreen from "./Business/BusinessScreen";
import LendScreen from "./Lend/LendScreen";
import ItemsScreen from "./Items/ItemsScreen";
import useStyles from "./navigationStyles";

const MainNavigation = () => {
  const [index, setIndex] = useState(0);
  const styles = useStyles();

  const tabs = [
    {
      component: <ItemsScreen />,
      title: "Items",
      icon: { name: "category", color: "white" },
    },
    {
      component: <LendScreen />,
      title: "Lend",
      icon: { name: "shopping-basket", color: "white" },
    },
    {
      component: <BusinessScreen />,
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

export default MainNavigation;
