import React from "react";
import { View, StyleSheet } from "react-native";
import CustomLoader from "../common/loader";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

interface Props {
  useLoading?: boolean;
  children: React.ReactNode;
}

const ScreenTemplate = (props: Props): React.ReactElement => {
  const { children, useLoading } = props;

  return (
    <View style={styles.container}>
      {useLoading ? <CustomLoader size={"large"} /> : <>{children}</>}
    </View>
  );
};

export default ScreenTemplate;
