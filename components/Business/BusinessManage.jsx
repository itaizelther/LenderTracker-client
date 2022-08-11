import React from "react";
import { Text } from "@rneui/themed";
import useAxios from "axios-hooks";

import useStyles from "./businessStyles";
import FilterableList from "../Common/FilterableList";
import BusinessItemNode from "./BusinessItemNode";

const BusinessManage = ({ business }) => {
  const styles = useStyles();

  const [{ data: items = [] }] = useAxios({
    url: "/api/items",
    params: { groupId: business.id },
  });

  return (
    <>
      <Text style={styles.header}>{business.name}</Text>
      <Text style={styles.subheader}>Your Business</Text>
      <FilterableList
        items={items}
        emptyMessage="Your business contains no items"
        containerStyle={{ width: "100%" }}
      >
        {(item) => <BusinessItemNode item={item} />}
      </FilterableList>
    </>
  );
};

export default BusinessManage;
