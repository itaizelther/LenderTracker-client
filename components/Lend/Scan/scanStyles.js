import { makeStyles } from "@rneui/themed";
import { Dimensions } from "react-native";

const useStyles = makeStyles(() => ({
  wideContainerStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
}));

export default useStyles;
