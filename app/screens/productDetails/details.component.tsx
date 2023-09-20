import { IProducts } from "@app/api";
import { CustomText } from "@app/components";
import { sizing } from "@app/constants/sizing";
import React from "react";
import { Image, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  detailsContainer: {
    paddingHorizontal: sizing.medium,
  },
  image: {
    height: 200,
    resizeMode: "contain",
    marginTop: sizing.medium,
  },
  title: {
    fontWeight: "800",
    textAlign: "center",
    fontSize: sizing.medium,
    marginTop: sizing.large,
  },
  price: {
    fontWeight: "700",
    marginTop: sizing.large,
  },
  description: {
    textAlign: "justify",
    marginTop: sizing.huge,
    fontSize: sizing.medium,
    lineHeight: sizing.large,
  },
});

interface Props {
  item: IProducts;
}

const ProductDetailsComponent = (props: Props): React.ReactElement => {
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
