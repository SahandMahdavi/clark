import React from "react";
import { Text, StyleProp, StyleSheet, TextStyle } from "react-native";
import { sizing } from "@app/constants/sizing";
import { colors } from "@app/theme";

const styles = StyleSheet.create({
  text: {
    fontSize: sizing.medium,
    lineHeight: sizing.large,
    color: colors.textPrimary,
  },
});

interface Props {
  text: string;
  numberOfLines?: number;
  style?: StyleProp<TextStyle>;
  ellipsizeMode?: "head" | "middle" | "tail" | "clip" | undefined;
}

const CustomText = (props: Props): React.ReactElement => {
  const { text, style, numberOfLines, ellipsizeMode } = props;

  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {text}
    </Text>
  );
};

export default CustomText;
