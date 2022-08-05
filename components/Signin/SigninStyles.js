import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles(() => ({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    width: "80%",
    alignSelf: "center",
  },
  header: {
    fontSize: 60,
  },
  inputContainer: {
    width: "100%",
  },
  inputLabel: {
    marginLeft: 10,
    fontSize: 18,
  },
  inputField: {
    paddingLeft: 10,
    backgroundColor: "lightgray",
  },
  signInContainer: {
    width: "100%",
    padding: 10,
  },
  signUpButton: {
    textDecorationLine: "underline",
    color: "blue",
    fontSize: 16,
  },
}));

export default useStyles;
