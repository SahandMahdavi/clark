import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { CustomCardView, CustomText } from "@app/components";
import { IProducts } from "@app/api";
import { sizing } from "@app/constants/sizing";

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    marginTop: sizing.small,
    marginHorizontal: sizing.extraSmall,
  },
  image: {
    height: 150,
    resizeMode: "contain",
    borderTopLeftRadius: sizing.large,
    borderTopRightRadius: sizing.large,
  },
  detailsContainer: {
    paddingTop: sizing.medium,
    paddingBottom: sizing.extraLarge,
    paddingHorizontal: sizing.medium,
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  price: {
    fontWeight: "700",
    marginTop: sizing.medium,
  },
  description: {
    marginTop: sizing.medium,
  },
});

interface Props {
  style?: any;
  item: IProducts;
  onPress: () => void;
}

const ProductsItemGrid = (props: Props): React.ReactElement => {
  const { item, style, onPress } = props;

  return (
    <CustomCardView
      onPress={onPress}
      containerStyle={[styles.container, style]}
    >
      <Image source={{ uri: item?.image }} style={styles.image} />

      <View style={styles.detailsContainer}>
        <CustomText numberOfLines={2} text={item?.title} style={styles.title} />

        <CustomText style={styles.price} text={item?.price + " " + "$"} />

        <CustomText
          numberOfLines={2}
          ellipsizeMode="tail"
          text={item?.description}
          style={styles.description}
        />
      </View>
    </CustomCardView>
  );
};

export default ProductsItemGrid;
