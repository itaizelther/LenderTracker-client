import React, { useContext } from "react";
import { View } from "react-native";
import useAxios from "axios-hooks";

import useStyles from "./businessStyles";
import BusinessManage from "./BusinessManage";
import BusinessCreate from "./BusinessCreate";
import UserContext from "../../context/userContext";

const ItemsScreen = () => {
  const styles = useStyles();
  const [user] = useContext(UserContext);

  const [{ data: businessSelect = [null] }, refreshBusiness] = useAxios({
    url: "/api/groups",
    params: { ownerId: user.id },
  });

  const [businessData] = businessSelect || [null];

  return (
    <View style={styles.container}>
      {businessData ? (
        <BusinessManage business={businessData} />
      ) : (
        <BusinessCreate onSelect={refreshBusiness} />
      )}
    </View>
  );
};

export default ItemsScreen;
