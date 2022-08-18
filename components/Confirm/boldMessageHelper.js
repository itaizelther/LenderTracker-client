import React from "react";
import { Text } from "@rneui/themed";
import useStyles from "./confirmStyles";

/**
 * A tag function that returns text node of the given string with all the expressions bolded
 * @param {String[]} strings the message as array of strings
 * @param  {...Strings} values the expressions of the template literal
 * @returns Text node
 */
const boldMessageHelper = (strings, ...values) => {
  const styles = useStyles();
  const texts = [];
  for (let i = 0; i < strings.length - 1; i++) {
    texts.push(<Text key={i * 2}>{strings[i]}</Text>);
    texts.push(
      <Text key={i * 2 + 1} style={styles.dynamicContent}>
        {values[i]}
      </Text>
    );
  }

  texts.push(<Text key={strings.length * 2}>{strings.at(-1)}</Text>);
  return <Text>{texts.map((text) => text)}</Text>;
};

export default boldMessageHelper;
