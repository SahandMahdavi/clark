import { IProducts } from "@app/api";
import { CustomText } from "@app/components";
import { spacing } from "@app/constants/spacing";
import React from "react";
import { Image, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: spacing.medium,
  },
  image: {
    height: 200,
    resizeMode: "contain",
    marginTop: spacing.medium,
  },
  title: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: spacing.medium,
    marginTop: spacing.large,
  },
  price: {
    fontWeight: "700",
    marginTop: spacing.large,
  },
  description: {
    textAlign: "justify",
    marginTop: spacing.huge,
    fontSize: spacing.medium,
    lineHeight: spacing.large,
  },
});

interface Props {
  item: IProducts;
}

const ProductDetailsComponent = (props: Props) => {
  const { item } = props;

  return (
    <>
      <Image source={{ uri: item?.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <CustomText text={item?.title} style={styles.title} />

        <CustomText text={item?.description} style={styles.description} />
      </View>
    </>
  );
};

export default ProductDetailsComponent;
