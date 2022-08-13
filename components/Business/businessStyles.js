import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
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
  addButton: {
    color: theme.colors.primary,
  },
  addItemContainer: {
    paddingRight: 50,
  },
}));

export default useStyles;
