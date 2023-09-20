import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "@app/theme";
import { spacing } from "@app/constants/spacing";

const styles = StyleSheet.create({
  container: {
    padding: spacing.medium,
    backgroundColor: colors.backgroundSecondary,
  },
  input: {
    padding: spacing.small,
    borderRadius: spacing.small,
    backgroundColor: colors.background,
  },
});

interface Props {
  onChangeText: (text: string) => void;
}

const CustomSearchBar = (props: Props): React.ReactElement => {
  const { onChangeText } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search product title..."
      />
    </View>
  );
};

export default CustomSearchBar;
