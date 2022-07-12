import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  manualContent: {
    flex: 1,
    width: "80%",
    alignItems: "center",
    marginTop: 40,
  },
}));

export default useStyles;
