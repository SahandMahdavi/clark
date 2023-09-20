import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { colors } from "@app/theme/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

interface Props {
  infoTitle?: string;
  size: "large" | "small";
  style?: StyleProp<ViewStyle>;
}

const CustomLoader = (props: Props): React.ReactElement => {
  const { size, style } = props;

  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={colors.tint} style={style} />
    </View>
  );
};

export default CustomLoader;
