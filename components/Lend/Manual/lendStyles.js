import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  manualContent: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    width: "85%",
  },
  orSeperator: {
    fontSize: 40,
    marginBottom: 20,
  },
  codeInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 25,
  },
}));

export default useStyles;
