import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Input, Text } from "@rneui/themed";

const FilterableList = ({ items, emptyMessage, children }) => {
  const [filter, setFilter] = useState("");

  const filterByObjProps = (obj, str) => {
    Object.values(obj).some((property) =>
      String(property).toLowerCase().includes(str.toLowerCase())
    );
  };

  return (
    <>
      <Input
        leftIcon={{ name: "filter-alt", color: "gray" }}
        placeholder="Enter words to filter by..."
        inputStyle={{ textAlign: "left" }}
        onChangeText={setFilter}
      />
      {items.length === 0 ? (
        <Text>{emptyMessage}</Text>
      ) : (
        <ScrollView>
          {items
            .filter((item) => filterByObjProps(item, filter))
            .map((item, index) => (
              <>{children({ item, index })}</>
            ))}
        </ScrollView>
      )}
    </>
  );
};

export default FilterableList;
