import { makeStyles } from "@rneui/themed";

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

export default useStyles;
