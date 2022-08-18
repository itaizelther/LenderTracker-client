import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { Input, Text } from "@rneui/themed";

const filterByObjProps = (obj, str) =>
  Object.values(obj).some((property) =>
    String(property).toLowerCase().includes(str.toLowerCase())
  );

const FilterableList = ({ children, items, emptyMessage, containerStyle }) => {
  const [filter, setFilter] = useState("");

  return (
    <View style={containerStyle}>
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
              <React.Fragment key={index}>{children(item)}</React.Fragment>
            ))}
        </ScrollView>
      )}
    </View>
  );
};

export default FilterableList;
