import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  manualContent: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    width: "75%",
  },
  orSeperator: {
    fontSize: 40,
    marginBottom: 20,
  },
}));

export default useStyles;
