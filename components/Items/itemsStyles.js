import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 70,
    width: "85%",
  },
  subheader: {
    fontSize: 15,
  },
  header: {
    fontSize: 40,
  },
  logoutButton: {
    color: theme.colors.primary,
  },
}));

export default useStyles;
