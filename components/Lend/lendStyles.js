import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "80%",
    alignItems: "center",
  },
  mainTitle: {
    fontSize: 35,
    marginTop: 40,
    textDecorationLine: "underline",
  },
  handshake: {
    width: 300,
    height: 200,
  },
  stepStyle: {
    borderRadius: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  stepText: {
    fontSize: 25,
    marginLeft: 20,
  },
  indicator: {
    containerStyle: {
      backgroundColor: theme.colors.background,
      width: 40,
    },
    disabledStyle: {
      borderColor: theme.colors.primary,
      borderWidth: 2,
    },
    disabledTitleStyle: {
      color: theme.colors.primary,
    },
  },
  buttonsContainer: {
    marginTop: 50,
    alignItems: "center",
  },
}));

export default useStyles;
