import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "@app/theme";
import { sizing } from "@app/constants/sizing";

const styles = StyleSheet.create({
  container: {
    padding: sizing.medium,
    backgroundColor: colors.backgroundSecondary,
  },
  input: {
    padding: sizing.small,
    borderRadius: sizing.small,
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
