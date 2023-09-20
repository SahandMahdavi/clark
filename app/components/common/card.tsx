import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "@app/theme/colors";
import { spacing } from "@app/constants/spacing";

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    shadowOpacity: 0.25,
    borderRadius: spacing.large,
    shadowRadius: spacing.extraSmall,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: colors.palette.neutral800,
    backgroundColor: colors.palette.neutral200,
  },
});

interface LActCardProps {
  onPress?: () => void;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

const CustomCardView = (props: LActCardProps): React.ReactElement => {
  const { onPress, children, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableWithoutFeedback testID="cardPress" onPress={onPress}>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CustomCardView;
