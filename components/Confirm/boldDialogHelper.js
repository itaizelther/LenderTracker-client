import { Text } from "@rneui/themed";
import useStyles from "./confirmStyles";

const boldDialogHelper = (strings, ...values) => {
  const styles = useStyles();
  return () => {
    const texts = [];
    for (let i = 0; i < strings.length - 1; i++) {
      texts.push(<Text>{strings[i]}</Text>);
      texts.push(<Text style={styles.dynamicContent}>{values[i]}</Text>);
    }

    texts.push(<Text>{strings.at(-1)}</Text>);
    return <Text>{texts.map((text) => text)}</Text>;
  };
};

export default boldDialogHelper;
