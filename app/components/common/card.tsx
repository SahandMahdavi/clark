import React from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import Animated from "react-native-reanimated";
import { colors } from "@app/theme/colors";
import { sizing } from "@app/constants/sizing";

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    shadowOpacity: 0.25,
    borderRadius: sizing.large,
    shadowRadius: sizing.extraSmall,
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
    <Animated.View style={[styles.container, containerStyle]}>
      <TouchableWithoutFeedback testID="cardPress" onPress={onPress}>
        <View>{children}</View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

export default CustomCardView;
