import React from "react";
import {
  ViewStyle,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { sizing } from "@app/constants/sizing";
import { colors } from "@app/theme";
import CustomText from "./text";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: sizing.large,
    paddingVertical: sizing.small,
    marginHorizontal: sizing.medium,
  },
  text: {
    fontWeight: "900",
    fontSize: sizing.medium,
    color: colors.background,
  },
});

interface Props {
  text: string;
  onPress: () => void;
  style: StyleProp<ViewStyle>;
}

const CustomButton = (props: Props): React.ReactElement => {
  const { text, style, onPress } = props;

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <CustomText text={text} style={styles.text} />
    </TouchableOpacity>
  );
};

export default CustomButton;
