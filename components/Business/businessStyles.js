import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    width: "85%",
  },
  header: {
    fontSize: 40,
  },
  subheader: {
    fontSize: 15,
  },
  createInstructions: {
    fontSize: 20,
    textAlign: "center",
  },
  createContainer: {
    width: "100%",
    padding: 10,
  },
}));

export default useStyles;
