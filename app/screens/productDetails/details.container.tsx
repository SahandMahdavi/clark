import {
  useRoute,
  RouteProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet, Linking } from "react-native";
import ProductDetailsComponent from "./details.component";
import { CustomButton } from "@app/components";
import { sizing } from "@app/constants/sizing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkoutButton: {
    marginTop: sizing.large,
  },
});

const ProductDetailsContainer = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamListBase, string>>();
  const { product }: any = route.params;

  if (!product) navigation.goBack();

  const onCheckoutPressed = () => {
    Linking.openURL("https://amzn.eu/d/7b05o4l");
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProductDetailsComponent item={product} />

      <CustomButton
        style={styles.checkoutButton}
        onPress={onCheckoutPressed}
        text={`Checkout ${product.price} $`}
      />
    </ScrollView>
  );
};

export default ProductDetailsContainer;
